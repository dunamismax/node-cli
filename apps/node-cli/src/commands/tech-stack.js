import enquirer from 'enquirer';
const { Select, MultiSelect, Input } = enquirer;
import chalk from 'chalk';
import ora from 'ora';
import { TECH_STACK, delay } from '@node-cli/shared-utils';

export const techStackCommand = {
  command: 'tech-stack',
  describe: 'Explore the technology stack used in this project',
  builder: (yargs) => {
    return yargs
      .option('interactive', {
        alias: 'i',
        type: 'boolean',
        description: 'Run in interactive mode'
      })
      .option('category', {
        alias: 'c',
        type: 'string',
        description: 'Filter by category'
      })
      .option('list', {
        alias: 'l',
        type: 'boolean',
        description: 'List all technologies'
      });
  },
  handler: async (argv) => {
    if (argv.interactive) {
      await runInteractiveMode();
    } else if (argv.category) {
      displayByCategory(argv.category);
    } else if (argv.list) {
      listAllTechnologies();
    } else {
      displayTechStackInfo();
    }
  }
};

async function runInteractiveMode() {
  console.log(chalk.blue('🚀 Interactive Tech Stack Explorer\n'));

  const mainMenu = new Select({
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      { name: 'overview', message: 'View full tech stack overview' },
      { name: 'categories', message: 'Browse by categories' },
      { name: 'search', message: 'Search technologies' },
      { name: 'compare', message: 'Compare technologies' }
    ]
  });

  const action = await mainMenu.run();

  switch (action) {
    case 'overview':
      displayTechStackInfo();
      break;
    case 'categories':
      await browseByCategoriesInteractive();
      break;
    case 'search':
      await searchTechnologies();
      break;
    case 'compare':
      await compareTechnologies();
      break;
  }
}

async function browseByCategoriesInteractive() {
  const categories = [...new Set(Object.values(TECH_STACK).map(tech => tech.category))];
  
  const categorySelect = new Select({
    name: 'category',
    message: 'Select a category to explore:',
    choices: categories.map(cat => ({
      name: cat,
      message: `${cat.charAt(0).toUpperCase() + cat.slice(1)} (${
        Object.values(TECH_STACK).filter(tech => tech.category === cat).length
      } technologies)`
    }))
  });

  const selectedCategory = await categorySelect.run();
  displayByCategory(selectedCategory);
}

async function searchTechnologies() {
  const searchInput = new Input({
    name: 'search',
    message: 'Enter search term:'
  });

  const searchTerm = await searchInput.run();
  const results = Object.values(TECH_STACK).filter(tech =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tech.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (results.length === 0) {
    console.log(chalk.yellow(`No technologies found matching "${searchTerm}"`));
    return;
  }

  console.log(chalk.green(`\n🔍 Found ${results.length} result(s) for "${searchTerm}":\n`));
  results.forEach(tech => {
    console.log(chalk.cyan(`• ${tech.name}`));
    console.log(`  ${tech.description}`);
    console.log(chalk.gray(`  Category: ${tech.category} | URL: ${tech.url}\n`));
  });
}

async function compareTechnologies() {
  const techChoices = Object.values(TECH_STACK).map(tech => ({
    name: tech.name,
    message: `${tech.name} (${tech.category})`
  }));

  const multiSelect = new MultiSelect({
    name: 'technologies',
    message: 'Select technologies to compare (2-4):',
    choices: techChoices,
    validate: (value) => {
      if (value.length < 2) {
        return 'Please select at least 2 technologies';
      }
      if (value.length > 4) {
        return 'Please select no more than 4 technologies';
      }
      return true;
    }
  });

  const selectedTechs = await multiSelect.run();
  
  const spinner = ora('Preparing comparison...').start();
  await delay(1000);
  spinner.succeed('Comparison ready!');

  console.log(chalk.blue('\n📊 Technology Comparison:\n'));
  
  selectedTechs.forEach(techName => {
    const tech = Object.values(TECH_STACK).find(t => t.name === techName);
    if (tech) {
      console.log(chalk.cyan(`${tech.name}:`));
      console.log(`  Category: ${tech.category}`);
      console.log(`  Description: ${tech.description}`);
      console.log(`  Documentation: ${tech.url}\n`);
    }
  });
}

function displayTechStackInfo() {
  console.log(chalk.blue('🛠️  Node.js Backend & CLI Technology Stack\n'));
  console.log(chalk.gray('Philosophy: Modularity, performance, and developer efficiency\n'));

  const categories = [...new Set(Object.values(TECH_STACK).map(tech => tech.category))];
  
  categories.forEach(category => {
    const categoryTechs = Object.values(TECH_STACK).filter(tech => tech.category === category);
    console.log(chalk.yellow(`${category.toUpperCase()}:`));
    
    categoryTechs.forEach(tech => {
      console.log(chalk.cyan(`  • ${tech.name}`));
      console.log(`    ${tech.description}`);
      console.log(chalk.gray(`    ${tech.url}\n`));
    });
  });
}

function displayByCategory(category) {
  const categoryTechs = Object.values(TECH_STACK).filter(
    tech => tech.category.toLowerCase() === category.toLowerCase()
  );

  if (categoryTechs.length === 0) {
    console.log(chalk.yellow(`No technologies found in category: ${category}`));
    return;
  }

  console.log(chalk.blue(`🏷️  ${category.toUpperCase()} Technologies:\n`));
  
  categoryTechs.forEach(tech => {
    console.log(chalk.cyan(`• ${tech.name}`));
    console.log(`  ${tech.description}`);
    console.log(chalk.gray(`  ${tech.url}\n`));
  });
}

function listAllTechnologies() {
  console.log(chalk.blue('📋 All Technologies:\n'));
  
  Object.values(TECH_STACK).forEach(tech => {
    console.log(chalk.cyan(`• ${tech.name} (${tech.category})`));
  });
  
  console.log(chalk.gray(`\nTotal: ${Object.keys(TECH_STACK).length} technologies`));
}
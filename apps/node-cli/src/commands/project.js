import enquirer from 'enquirer';
const { Select, Input, Confirm } = enquirer;
import chalk from 'chalk';
import ora from 'ora';
import { delay, generateId } from '@node-cli/shared-utils';

const PROJECT_TEMPLATES = {
  'fastify-api': {
    name: 'Fastify API',
    description: 'High-performance RESTful API with Fastify',
    files: ['src/index.js', 'src/routes/index.js', 'package.json'],
    dependencies: ['fastify', '@fastify/cors', '@fastify/helmet']
  },
  'cli-app': {
    name: 'CLI Application',
    description: 'Interactive command-line application',
    files: ['src/index.js', 'src/commands/index.js', 'package.json'],
    dependencies: ['yargs', 'enquirer', 'chalk']
  },
  'mongodb-service': {
    name: 'MongoDB Service',
    description: 'Database service with MongoDB driver',
    files: ['src/database.js', 'src/models/index.js', 'package.json'],
    dependencies: ['mongodb', '@vinejs/vine']
  }
};

export const projectCommand = {
  command: 'project',
  describe: 'Project scaffolding and management tools',
  builder: (yargs) => {
    return yargs
      .option('interactive', {
        alias: 'i',
        type: 'boolean',
        description: 'Run in interactive mode'
      })
      .option('info', {
        type: 'boolean',
        description: 'Show project information'
      });
  },
  handler: async (argv) => {
    if (argv.interactive) {
      await runProjectInteractive();
    } else if (argv.info) {
      showProjectInfo();
    } else {
      showProjectInfo();
    }
  }
};

async function runProjectInteractive() {
  console.log(chalk.blue('🏗️  Project Manager\n'));

  const actionSelect = new Select({
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      { name: 'scaffold', message: 'Scaffold new project structure' },
      { name: 'templates', message: 'Browse project templates' },
      { name: 'analyze', message: 'Analyze current project' },
      { name: 'info', message: 'Show project information' }
    ]
  });

  const action = await actionSelect.run();

  switch (action) {
    case 'scaffold':
      await scaffoldProject();
      break;
    case 'templates':
      await browseTemplates();
      break;
    case 'analyze':
      await analyzeProject();
      break;
    case 'info':
      showProjectInfo();
      break;
  }
}

async function scaffoldProject() {
  console.log(chalk.yellow('🚧 Project Scaffolding\n'));

  const projectName = new Input({
    name: 'name',
    message: 'Project name:',
    validate: (value) => {
      if (!value.trim()) {
        return 'Project name is required';
      }
      if (!/^[a-z0-9-]+$/.test(value)) {
        return 'Use lowercase letters, numbers, and hyphens only';
      }
      return true;
    }
  });

  const name = await projectName.run();

  const templateSelect = new Select({
    name: 'template',
    message: 'Choose a template:',
    choices: Object.entries(PROJECT_TEMPLATES).map(([key, template]) => ({
      name: key,
      message: `${template.name} - ${template.description}`
    }))
  });

  const selectedTemplate = await templateSelect.run();
  const template = PROJECT_TEMPLATES[selectedTemplate];

  const confirmScaffold = new Confirm({
    name: 'confirm',
    message: `Create project "${name}" with ${template.name} template?`
  });

  const confirmed = await confirmScaffold.run();

  if (confirmed) {
    await simulateScaffolding(name, template);
  } else {
    console.log(chalk.gray('Project scaffolding cancelled.'));
  }
}

async function simulateScaffolding(projectName, template) {
  const spinner = ora('Creating project structure...').start();
  
  await delay(1000);
  spinner.text = 'Installing dependencies...';
  await delay(1500);
  
  spinner.text = 'Setting up configuration...';
  await delay(800);
  
  spinner.succeed(`Project "${projectName}" created successfully!`);

  console.log(chalk.green('\n✅ Project Structure:'));
  template.files.forEach(file => {
    console.log(chalk.gray(`  📄 ${file}`));
  });

  console.log(chalk.green('\n📦 Dependencies:'));
  template.dependencies.forEach(dep => {
    console.log(chalk.gray(`  • ${dep}`));
  });

  console.log(chalk.cyan(`\n🚀 Next steps:`));
  console.log(chalk.gray(`  cd ${projectName}`));
  console.log(chalk.gray(`  pnpm install`));
  console.log(chalk.gray(`  pnpm dev`));
}

async function browseTemplates() {
  console.log(chalk.blue('📋 Available Templates\n'));

  const templateSelect = new Select({
    name: 'template',
    message: 'Select a template to view details:',
    choices: Object.entries(PROJECT_TEMPLATES).map(([key, template]) => ({
      name: key,
      message: template.name
    }))
  });

  const selectedTemplate = await templateSelect.run();
  const template = PROJECT_TEMPLATES[selectedTemplate];

  console.log(chalk.cyan(`\n📦 ${template.name}`));
  console.log(`${template.description}\n`);

  console.log(chalk.yellow('Files:'));
  template.files.forEach(file => {
    console.log(chalk.gray(`  • ${file}`));
  });

  console.log(chalk.yellow('\nDependencies:'));
  template.dependencies.forEach(dep => {
    console.log(chalk.gray(`  • ${dep}`));
  });
}

async function analyzeProject() {
  console.log(chalk.blue('🔍 Project Analysis\n'));

  const spinner = ora('Analyzing project structure...').start();
  await delay(1000);

  spinner.text = 'Checking dependencies...';
  await delay(800);

  spinner.text = 'Validating configuration...';
  await delay(600);

  spinner.succeed('Analysis complete!');

  const analysisData = {
    id: generateId(),
    type: 'pnpm monorepo',
    workspaces: ['apps/node-api', 'apps/node-cli', 'packages/shared-config', 'packages/shared-utils'],
    technologies: Object.keys(PROJECT_TEMPLATES),
    timestamp: new Date().toISOString()
  };

  console.log(chalk.green('\n📊 Analysis Results:'));
  console.log(chalk.gray(`  Project ID: ${analysisData.id}`));
  console.log(chalk.gray(`  Type: ${analysisData.type}`));
  console.log(chalk.gray(`  Workspaces: ${analysisData.workspaces.length}`));
  console.log(chalk.gray(`  Technologies: ${analysisData.technologies.length}`));
  console.log(chalk.gray(`  Analyzed at: ${analysisData.timestamp}`));

  console.log(chalk.yellow('\n🏢 Workspaces:'));
  analysisData.workspaces.forEach(workspace => {
    console.log(chalk.gray(`  • ${workspace}`));
  });
}

function showProjectInfo() {
  console.log(chalk.blue('ℹ️  Project Information\n'));

  console.log(chalk.cyan('📦 Node CLI Monorepo'));
  console.log('A high-performance Node.js monorepo featuring a RESTful API and CLI\n');

  console.log(chalk.yellow('🏗️ Architecture:'));
  console.log(chalk.gray('  • Monorepo structure with pnpm workspaces'));
  console.log(chalk.gray('  • Shared configuration and utilities'));
  console.log(chalk.gray('  • JavaScript with ES Modules'));
  console.log(chalk.gray('  • Modern Node.js development practices\n'));

  console.log(chalk.yellow('🎯 Applications:'));
  console.log(chalk.gray('  • node-api: RESTful API with Fastify'));
  console.log(chalk.gray('  • node-cli: Interactive CLI with Yargs\n'));

  console.log(chalk.yellow('📚 Packages:'));
  console.log(chalk.gray('  • shared-config: ESLint configuration'));
  console.log(chalk.gray('  • shared-utils: Common utilities\n'));

  console.log(chalk.green('🔗 Repository: https://github.com/dunamismax/node-cli'));
  console.log(chalk.green('👤 Author: dunamismax <dunamismax@tutamail.com>'));
}
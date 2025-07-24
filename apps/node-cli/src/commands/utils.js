import enquirer from 'enquirer';
const { Select, Input, Confirm } = enquirer;
import chalk from 'chalk';
import ora from 'ora';
import { isValidEmail, sanitizeString, generateId, delay } from '@node-cli/shared-utils';

export const utilsCommand = {
  command: 'utils',
  describe: 'Utility tools and helpers',
  builder: (yargs) => {
    return yargs
      .option('interactive', {
        alias: 'i',
        type: 'boolean',
        description: 'Run in interactive mode'
      })
      .option('generate', {
        alias: 'g',
        type: 'string',
        description: 'Generate utility (id, password, etc.)',
        choices: ['id', 'password', 'uuid']
      })
      .option('validate', {
        alias: 'v',
        type: 'string',
        description: 'Validate input (email, url, etc.)',
        choices: ['email', 'url']
      });
  },
  handler: async (argv) => {
    if (argv.interactive) {
      await runUtilsInteractive();
    } else if (argv.generate) {
      await handleGenerate(argv.generate);
    } else if (argv.validate) {
      await handleValidate(argv.validate);
    } else {
      showUtilsInfo();
    }
  }
};

async function runUtilsInteractive() {
  console.log(chalk.blue('🛠️  Utility Tools\n'));

  const mainMenu = new Select({
    name: 'category',
    message: 'Select a utility category:',
    choices: [
      { name: 'generators', message: '🎲 Generators - Create IDs, passwords, and more' },
      { name: 'validators', message: '✅ Validators - Validate emails, URLs, and data' },
      { name: 'formatters', message: '🎨 Formatters - Format and sanitize text' },
      { name: 'converters', message: '🔄 Converters - Convert between formats' }
    ]
  });

  const category = await mainMenu.run();

  switch (category) {
    case 'generators':
      await showGenerators();
      break;
    case 'validators':
      await showValidators();
      break;
    case 'formatters':
      await showFormatters();
      break;
    case 'converters':
      await showConverters();
      break;
  }
}

async function showGenerators() {
  console.log(chalk.yellow('🎲 Generators\n'));

  const generatorSelect = new Select({
    name: 'generator',
    message: 'Choose a generator:',
    choices: [
      { name: 'id', message: 'Random ID - Generate unique identifiers' },
      { name: 'password', message: 'Password - Generate secure passwords' },
      { name: 'uuid', message: 'UUID - Generate UUID v4' },
      { name: 'hash', message: 'Hash - Generate random hash strings' }
    ]
  });

  const generator = await generatorSelect.run();
  await executeGenerator(generator);
}

async function executeGenerator(type) {
  const spinner = ora(`Generating ${type}...`).start();
  await delay(500);

  let result;
  
  switch (type) {
    case 'id':
      result = generateId();
      break;
    case 'password':
      result = generatePassword(12);
      break;
    case 'uuid':
      result = generateUUID();
      break;
    case 'hash':
      result = generateHash();
      break;
    default:
      result = 'Unknown generator';
  }

  spinner.succeed(`Generated ${type}!`);
  console.log(chalk.green(`\n🎯 Result: ${chalk.cyan(result)}\n`));

  const copyPrompt = new Confirm({
    name: 'copy',
    message: 'Copy to clipboard? (simulated)'
  });

  const shouldCopy = await copyPrompt.run();
  if (shouldCopy) {
    console.log(chalk.gray(`📋 Copied "${result}" to clipboard (simulated)`));
  }
}

async function showValidators() {
  console.log(chalk.yellow('✅ Validators\n'));

  const validatorSelect = new Select({
    name: 'validator',
    message: 'Choose a validator:',
    choices: [
      { name: 'email', message: 'Email - Validate email addresses' },
      { name: 'url', message: 'URL - Validate web URLs' },
      { name: 'json', message: 'JSON - Validate JSON syntax' },
      { name: 'custom', message: 'Custom - Create custom validation' }
    ]
  });

  const validator = await validatorSelect.run();
  await executeValidator(validator);
}

async function executeValidator(type) {
  const inputPrompt = new Input({
    name: 'input',
    message: `Enter ${type} to validate:`
  });

  const input = await inputPrompt.run();
  const spinner = ora(`Validating ${type}...`).start();
  await delay(300);

  let isValid = false;
  let message = '';

  switch (type) {
    case 'email': {
      isValid = isValidEmail(input);
      message = isValid ? 'Valid email address' : 'Invalid email format';
      break;
    }
    case 'url':
      isValid = isValidUrl(input);
      message = isValid ? 'Valid URL' : 'Invalid URL format';
      break;
    case 'json':
      const jsonResult = isValidJson(input);
      isValid = jsonResult.valid;
      message = jsonResult.message;
      break;
    default:
      message = 'Validator not implemented';
  }

  if (isValid) {
    spinner.succeed(message);
    console.log(chalk.green(`✅ ${input} is valid`));
  } else {
    spinner.fail(message);
    console.log(chalk.red(`❌ ${input} is invalid`));
  }
}

async function showFormatters() {
  console.log(chalk.yellow('🎨 Formatters\n'));

  const formatterSelect = new Select({
    name: 'formatter',
    message: 'Choose a formatter:',
    choices: [
      { name: 'sanitize', message: 'Sanitize - Clean and sanitize text' },
      { name: 'slug', message: 'Slug - Convert to URL-friendly slug' },
      { name: 'title', message: 'Title Case - Convert to title case' },
      { name: 'camel', message: 'Camel Case - Convert to camelCase' }
    ]
  });

  const formatter = await formatterSelect.run();
  await executeFormatter(formatter);
}

async function executeFormatter(type) {
  const inputPrompt = new Input({
    name: 'input',
    message: 'Enter text to format:'
  });

  const input = await inputPrompt.run();
  const spinner = ora(`Formatting text...`).start();
  await delay(300);

  let result;

  switch (type) {
    case 'sanitize':
      result = sanitizeString(input);
      break;
    case 'slug':
      result = createSlug(input);
      break;
    case 'title':
      result = toTitleCase(input);
      break;
    case 'camel':
      result = toCamelCase(input);
      break;
    default:
      result = input;
  }

  spinner.succeed('Text formatted!');
  console.log(chalk.green(`\n📝 Original: ${chalk.gray(input)}`));
  console.log(chalk.green(`🎨 Formatted: ${chalk.cyan(result)}\n`));
}

async function showConverters() {
  console.log(chalk.yellow('🔄 Converters\n'));

  const converterSelect = new Select({
    name: 'converter',
    message: 'Choose a converter:',
    choices: [
      { name: 'base64', message: 'Base64 - Encode/decode base64' },
      { name: 'timestamp', message: 'Timestamp - Convert dates and timestamps' },
      { name: 'case', message: 'Case - Convert text case' },
      { name: 'units', message: 'Units - Convert measurements' }
    ]
  });

  const converter = await converterSelect.run();
  await executeConverter(converter);
}

async function executeConverter(type) {
  console.log(chalk.blue(`🔄 ${type.charAt(0).toUpperCase() + type.slice(1)} Converter\n`));

  if (type === 'timestamp') {
    await timestampConverter();
  } else {
    console.log(chalk.gray(`${type} converter not implemented yet`));
  }
}

async function timestampConverter() {
  const modeSelect = new Select({
    name: 'mode',
    message: 'Choose conversion mode:',
    choices: [
      { name: 'now', message: 'Current timestamp' },
      { name: 'to-date', message: 'Timestamp to date' },
      { name: 'to-timestamp', message: 'Date to timestamp' }
    ]
  });

  const mode = await modeSelect.run();

  switch (mode) {
    case 'now': {
      const now = Date.now();
      const date = new Date(now).toISOString();
      console.log(chalk.green(`⏰ Current timestamp: ${chalk.cyan(now)}`));
      console.log(chalk.green(`📅 Current date: ${chalk.cyan(date)}`));
      break;
    }
    case 'to-date': {
      const timestampInput = new Input({
        name: 'timestamp',
        message: 'Enter timestamp:'
      });
      const timestamp = await timestampInput.run();
      const convertedDate = new Date(parseInt(timestamp)).toISOString();
      console.log(chalk.green(`📅 Date: ${chalk.cyan(convertedDate)}`));
      break;
    }
    case 'to-timestamp': {
      const dateInput = new Input({
        name: 'date',
        message: 'Enter date (YYYY-MM-DD or ISO string):'
      });
      const dateStr = await dateInput.run();
      const convertedTimestamp = new Date(dateStr).getTime();
      console.log(chalk.green(`⏰ Timestamp: ${chalk.cyan(convertedTimestamp)}`));
      break;
    }
  }
}

async function handleGenerate(type) {
  await executeGenerator(type);
}

async function handleValidate(type) {
  await executeValidator(type);
}

function showUtilsInfo() {
  console.log(chalk.blue('🛠️  Utility Tools\n'));
  console.log(chalk.gray('Available utility categories:\n'));
  
  console.log(chalk.yellow('🎲 Generators:'));
  console.log(chalk.gray('  • ID generation'));
  console.log(chalk.gray('  • Password generation'));
  console.log(chalk.gray('  • UUID generation\n'));
  
  console.log(chalk.yellow('✅ Validators:'));
  console.log(chalk.gray('  • Email validation'));
  console.log(chalk.gray('  • URL validation'));
  console.log(chalk.gray('  • JSON validation\n'));
  
  console.log(chalk.yellow('🎨 Formatters:'));
  console.log(chalk.gray('  • Text sanitization'));
  console.log(chalk.gray('  • Slug generation'));
  console.log(chalk.gray('  • Case conversion\n'));
  
  console.log(chalk.cyan('Use --interactive flag for interactive mode'));
}

// Helper functions
function generatePassword(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function generateHash() {
  return Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function isValidJson(str) {
  try {
    JSON.parse(str);
    return { valid: true, message: 'Valid JSON' };
  } catch (error) {
    return { valid: false, message: `Invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}` };
  }
}

function createSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function toTitleCase(text) {
  return text.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

function toCamelCase(text) {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}
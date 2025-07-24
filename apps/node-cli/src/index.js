#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import figlet from 'figlet';
import chalk from 'chalk';
import { techStackCommand } from './commands/tech-stack.js';
import { projectCommand } from './commands/project.js';
import { utilsCommand } from './commands/utils.js';

function displayBanner() {
  const banner = figlet.textSync('Node CLI', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  });
  
  console.log(chalk.cyan(banner));
  console.log(chalk.gray('A high-performance CLI built with Node.js, Yargs, and Enquirer\n'));
}

async function main() {
  displayBanner();

  await yargs(hideBin(process.argv))
    .scriptName('node-cli')
    .usage('$0 <command> [options]')
    .command(techStackCommand)
    .command(projectCommand)
    .command(utilsCommand)
    .demandCommand(1, 'You need to specify a command')
    .help('help')
    .alias('help', 'h')
    .version('1.0.0')
    .alias('version', 'v')
    .wrap(yargs().terminalWidth())
    .epilogue('For more information, visit: https://github.com/dunamismax/node-cli')
    .parse();
}

main().catch((error) => {
  console.error(chalk.red('CLI Error:'), error);
  process.exit(1);
});
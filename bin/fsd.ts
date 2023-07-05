import boxen from 'boxen';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import clear from 'clear';
import figlet from 'figlet';
import chalk from 'chalk';
import StandardFont from "figlet/importable-fonts/Standard.js";

clear();

figlet.parseFont('Standard', StandardFont);

figlet(
  'FSD CLI',
  (err, data) => err
    ? console.error(err)
    : console.log(chalk.blue(data))
);

// COMMANDS
const commands = {
  generate: {
    alias: 'g',
    description: 'Generate slice'
  }
} as const;

const createCommandText = (
  ...commandKeys: (keyof typeof commands)[]
) => boxen(commandKeys.join('\n'), {
  title: 'Command example',
  titleAlignment: 'center',
  borderColor: 'red'
});

// ARGS
yargs(hideBin(process.argv))
  .command('generate', commands.generate.description, {
    widget: {
      alias: 'w',
      description: 'Generate widget'
    }
  }, args => console.log(args))
  .example('fsd generate widget card', 'Generate "card" widget')
  // .alias('w', 'widget')
  // .describe('w', 'Generate widget')
  .showHelp()
  .parse();

// yargs(hideBin(process.argv))
//   .command('delete', 'Delete slice', undefined, console.log)
//   .example('fsd delete widget card', 'Delete "card" widget')
//   .parse();

console.log(
  createCommandText(
    'generate'
  ),
  // argv
);
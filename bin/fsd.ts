import boxen from 'boxen';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import FileSystemUtils from '../lib/file-system-utils/file-system-utils';

const sourceDirs: string[] = [
  'src',
  'lib'
];

const createCommandText = (
  ...text: string[]
) => boxen(text.join('\n'), {
  title: 'Command example',
  titleAlignment: 'center',
  borderColor: 'blue'
});


console.log(
  new FileSystemUtils(sourceDirs)
    .findSourcePath()
);

// ARGS
yargs(hideBin(process.argv))
  .command(
    'generate',
    'Generate slice',
    {
      widget: {
        alias: 'w',
        description: 'Generate widget',
        boolean: true
      }
    },
    args => console.log('Generate slice', args
  ))
  .example('fsd generate widget card', 'Generate "card" widget')
  .demandCommand()
  .parse();

yargs(hideBin(process.argv))
  .command('delete', 'Delete slice', {
    widget: {
      alias: 'w',
      description: 'Delete widget'
    }
  }, args => console.log('Delete slice', args))
  .example('fsd delete widget card', 'Delete "card" widget')
  .demandCommand()
  .parse();

console.log(
  createCommandText(
    'generate'
  ),
  // argv
);
import { generateSlice } from '../lib/generators/slice/slice';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// 💫

yargs(hideBin(process.argv))
  .command(
    'generate',
    'Generate slice',
    {
      widget: {
        alias: 'w',
        description: 'Generate widget'
      }
    },
    args => {
      generateSlice(args.widget as string, 'widget');
    }
  )
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

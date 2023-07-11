import { CommandOption } from '../lib/types/command.types';
import { generateSlice } from '../lib/generators/slice/slice';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {
  showWelcomeText,
  showExampleText
} from '../lib/console-formatters/show-welcome-text';
import { SliceType } from '../lib/types/slice.types';

const generationCommandOptions: CommandOption = {
  [SliceType.widget]: {
    alias: 'w',
    description: 'Generate widget',
    example: 'fsd g -w cart'
  },
  [SliceType.page]: {
    alias: 'p',
    description: 'Generate page',
    example: 'fsd g -p registration'
  },
  [SliceType.feature]: {
    alias: 'f',
    description: 'Generate feature',
    example: 'fsd g -f cartItem'
  },
  [SliceType.entity]: {
    alias: 'e',
    description: 'Generate entity',
    example: 'fsd g -e cart-item-details'
  },
  [SliceType.module]: {
    alias: 'm',
    description: 'Generate module',
    example: 'fsd g -m userProfile'
  },
  [SliceType.component]: {
    alias: 'c',
    description: 'Generate component',
    example: 'fsd g -c table'
  }
};

const args = hideBin(process.argv);

if (!args.length) {
  showWelcomeText();
  showExampleText(generationCommandOptions);
}

yargs(args)
  .command({
    command: 'generate',
    describe: 'Generate slice',
    aliases: [ 'g' ],
    builder: generationCommandOptions,
    handler: args => {
      for (const key in generationCommandOptions) {
        args[key]
          && generateSlice(
            args[key] as string, key as SliceType
          );
      }
    }
  })
  .alias({
    h: 'help',
    v: 'version'
  })
  .demandCommand()
  .parse();

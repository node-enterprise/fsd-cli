import { CommandOption } from '../lib/types/command.types';
import { generateSlice } from '../lib/generators/slice/slice';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {
  showWelcomeText,
  showExampleText
} from '../lib/console-formatters/show-welcome-text';
import { SliceType } from '../lib/types/slice.types';
import { isCommand } from '../lib/command/checkers';

const generationCommandOptions: CommandOption = {
  [SliceType.widget]: {
    alias: 'w',
    description: 'Generate widget',
    example: 'fsd g -w widget-name'
  },
  [SliceType.page]: {
    alias: 'p',
    description: 'Generate page',
    example: 'fsd g -p page-name'
  },
  [SliceType.feature]: {
    alias: 'f',
    description: 'Generate feature',
    example: 'fsd g -f feature-name'
  },
  [SliceType.entity]: {
    alias: 'e',
    description: 'Generate entity',
    example: 'fsd g -e entity-name'
  },
  [SliceType.module]: {
    alias: 'm',
    description: 'Generate module',
    example: 'fsd g -m module-name'
  },
  [SliceType.component]: {
    alias: 'c',
    description: 'Generate component',
    example: 'fsd g -c component-name'
  },
  [SliceType.shared]: {
    alias: 's',
    description: 'Generate shared',
    example: 'fsd g -s shared-name'
  }
};

const argv = hideBin(process.argv);

if (!argv.length) {
  showWelcomeText();
  showExampleText(generationCommandOptions);
}

yargs(argv)
  .command({
    command: 'generate',
    describe: 'Generate slice',
    aliases: [ 'g' ],
    builder: generationCommandOptions,
    handler: args => {
      for (const key in generationCommandOptions) {
        const sliceType = key as SliceType;

        isCommand(
          generationCommandOptions,
          argv,
          args,
          sliceType
        )
          && generateSlice(args[key], sliceType);
      }
    }
  })
  .alias({
    h: 'help',
    v: 'version'
  })
  .demandCommand()
  .parse();

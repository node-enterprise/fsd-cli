import { CommandOption } from '../lib/types/command.types';
import { generateSlice } from '../lib/generators/slice/slice';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { showWelcomeText } from '../lib/console-formatters/show-welcome-text';
import fs from 'fs';
import path from 'path';

const flagFilePath = path.resolve(
  __dirname, './.firstrun'
);

if (!fs.existsSync(flagFilePath)) {
  showWelcomeText();
  fs.writeFileSync(flagFilePath, '');
}

const generateCommandOptions: CommandOption = {
  widget: {
    alias: 'w',
    description: 'Generate widget',
    example: 'fsd g -w placeholder'
  },
  page: {
    alias: 'p',
    description: 'Generate page',
    example: 'fsd g -p user-creation'
  },
  feature: {
    alias: 'f',
    description: 'Generate feature',
    example: 'fsd g -f cart'
  },
  entity: {
    alias: 'e',
    description: 'Generate entity',
    example: 'fsd g -e cartItem'
  }
};

yargs(hideBin(process.argv))
  .command({
    command: 'generate',
    describe: 'Generate slice',
    aliases: [ 'g' ],
    builder: generateCommandOptions,
    handler: args => {
      for (const key in generateCommandOptions) {
        args[key]
          && generateSlice(
            args[key] as string, key
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

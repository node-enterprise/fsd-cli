import { CustomOption } from "../types/command.types";
import { CommandOption } from "../types/command.types";
import { SliceType } from "../types/slice.types";
import { ArgumentsCamelCase } from "yargs";

export const isCommand = (
  commandOptions: CommandOption,
  argv: string[],
  args: ArgumentsCamelCase,
  sliceType: SliceType
): boolean => {
  const options = commandOptions[
    sliceType
  ] as CustomOption;

  return !!(typeof args[sliceType] === 'string'
    && (argv.includes(`--${sliceType}`)
      || (options.alias
      && argv.includes(`-${options.alias}`))));
};
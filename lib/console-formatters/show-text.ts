import boxen from "boxen";
import chalk from "chalk";
import {
  CommandResult,
  CommandTextOption,
  CommandTextStatus
} from "../types/command.types";

const wrapToCommandResult = (
  value: string
): CommandResult => ({
  value,
  log: () => console.log(value)
});

export const commandTextWithStatus = (
  options: CommandTextOption
): CommandResult => {
  const status = options.status
    || CommandTextStatus.primary;

  let value = chalk[status](options.title);

  if (options.text) value += ` ${options.text}`;
  if (options.bold) value = chalk.bold(value);

  value = value.trim();

  return wrapToCommandResult(value);
};

export const commandTextBordered = (
  title: string,
  text: string
): CommandResult => {
  const value = boxen(text, {
    title: title,
    titleAlignment: 'center',
    borderColor: 'blue'
  });

  return wrapToCommandResult(value);
};
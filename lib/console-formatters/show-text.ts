import boxen from "boxen";
import chalk from "chalk";
import { CommandTextStatus } from "../types/command.types";

export const commandTextWithStatus = (
  title: string,
  text: string,
  status: CommandTextStatus = CommandTextStatus.primary
) => console.log(
  chalk[status](title) +
    ` ${text}`
);

export const commandTextBordered = (
  title: string,
  text: string
) => console.log(
  boxen(text, {
    title: title,
    titleAlignment: 'center',
    borderColor: 'red'
  })
);
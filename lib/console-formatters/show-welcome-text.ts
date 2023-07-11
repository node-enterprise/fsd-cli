import StandardFont from "figlet/importable-fonts/Standard.js";
import figlet from 'figlet';
import chalk from 'chalk';
import { CommandOption } from "../types/command.types";
import { CustomOption } from "../types/command.types";
import { CommandTextStatus } from "../types/command.types";
import { commandTextBordered, commandTextWithStatus } from "./show-text";

export const showWelcomeText = () => {
  figlet.parseFont('Standard', StandardFont);

  figlet(
    'FSD CLI',
    (err, data) => err
      ? console.error(err)
      : console.log(chalk.blue(data))
  );
};

export const showExampleText = (
  commandOptions: CommandOption
) => {
  const exampleText: string[] = [];

  for (const key in commandOptions) {
    const options: CustomOption = commandOptions[key];
    
    exampleText.push(
      commandTextWithStatus({
        title: options.description,
        text: `"${options.example}"`,
        status: CommandTextStatus.info
      }).value
    );
  }

  commandTextBordered(
    'Command examples', exampleText.join('\n')
  ).log();
};
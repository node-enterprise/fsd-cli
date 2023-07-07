import StandardFont from "figlet/importable-fonts/Standard.js";
import figlet from 'figlet';
import chalk from 'chalk';

export function showWelcomeText() {
  figlet.parseFont('Standard', StandardFont);

  figlet(
    'FSD CLI',
    (err, data) => err
      ? console.error(err)
      : console.log(chalk.blue(data))
  );
}
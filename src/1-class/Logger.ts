import chalk from "chalk";

export class Logger {
  constructor() {}

  static log(context: string, message: string) {
    const currentDate = new Intl.DateTimeFormat("en");
    console.log(
      chalk.black.bgGreen(`[${currentDate.format(new Date())}]`),
      chalk.cyan(context),
      chalk.whiteBright(message)
    );
  }
}

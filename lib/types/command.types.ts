import { Options } from "yargs"

export enum CommandTextStatus {
  success = 'green',
  error = 'red',
  primary = 'blue',
  info = 'blackBright'
}

export type CommandOptionName = 'widget'
  | 'page'
  | 'feature'
  | 'entity'

export type CommandOption = Record<
  CommandOptionName, CustomOption
>

export type CustomOption = Options & {
  example?: string
}
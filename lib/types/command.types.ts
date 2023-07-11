import { Options } from "yargs"
import { SliceType } from "./slice.types"

export enum CommandTextStatus {
  success = 'green',
  error = 'red',
  primary = 'blue',
  info = 'blackBright'
}

export type CommandOption = Record<
  SliceType, CustomOption
>

export type CustomOption = Options & {
  example?: string
}

export interface CommandTextOption {
  text?: string
  title?: string
  status?: CommandTextStatus
  bold?: boolean
}

export interface CommandResult {
  value: string
  log: () => void
}
import { SelectAsync } from './SelectAsync'
import { SelectDefault } from './SelectDefault'

export type Option = {
  value: string
  label: string
  image?: string
}

export const Select = {
  Default: SelectDefault,
  Async: SelectAsync,
}

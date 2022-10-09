type ObjectType = {
  [key: string]: boolean | number | string
}

type OptionType = {
  value: number | string
  label: string | ObjectType
}

export type { OptionType }

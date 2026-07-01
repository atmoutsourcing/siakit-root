import { ComponentProps } from 'react'

import { toMoney, toPattern } from 'vanilla-masker'

import { Text } from '@siakit/text'

import { MaskType, masks } from './masks'

type CustomMaskType = MaskType | 'money' | 'phone'

type MaskProps = {
  children: string
  mask: CustomMaskType
} & ComponentProps<typeof Text>

type ToMaskData = {
  value: string
  mask: CustomMaskType
}

function toCnpj(value: string) {
  const cleaned = value
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 14)

  let result = ''

  for (let i = 0; i < cleaned.length; i++) {
    if (i === 2 || i === 5) result += '.'
    if (i === 8) result += '/'
    if (i === 12) result += '-'

    result += cleaned[i]
  }

  return result
}

export function toMask({ value, mask }: ToMaskData) {
  if (mask === 'money') {
    return toMoney(value)
  }

  if (mask === 'phone') {
    const newValue = value.replace(/\D/g, '')

    if (newValue.length > 10) {
      return toPattern(newValue, '(99) 99999-9999')
    }

    return toPattern(newValue, '(99) 9999-9999')
  }

  if (mask === 'time') {
    const newValue = value.replace(/\D/g, '')

    if (newValue.length === 3) {
      return toPattern(newValue, '9:99')
    }

    if (newValue.length === 4) {
      return toPattern(newValue, '99:99')
    }

    if (newValue.length >= 5) {
      return toPattern(newValue, '999:99')
    }

    return toPattern(newValue, '99')
  }

  if (mask === 'cnpj') {
    return toCnpj(value)
  }

  return toPattern(value, masks[mask])
}

export function Mask({ children, mask }: MaskProps) {
  return <Text>{toMask({ value: children, mask })}</Text>
}

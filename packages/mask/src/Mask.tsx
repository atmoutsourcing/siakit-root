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

  return toPattern(value, masks[mask])
}

export function Mask({ children, mask }: MaskProps) {
  return <Text>{toMask({ value: children, mask })}</Text>
}

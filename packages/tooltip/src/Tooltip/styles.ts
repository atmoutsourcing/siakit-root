import * as RadixTooltip from '@radix-ui/react-tooltip'
import { styled } from '@siakit/core'

export const Arrow = styled(RadixTooltip.Arrow, {})

export const Container = styled('div', {
  borderRadius: 4,
  padding: '4px 8px',
  maxWidth: 320,
  fontSize: 14,
  lineHeight: '16px',
  color: '$gray1',
  textAlign: 'center',

  '&::selection': {
    backgroundColor: '$primary11',
  },
})

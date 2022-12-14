import * as RadixTooltip from '@radix-ui/react-tooltip'
import { styled } from '@siakit/core'

const Arrow = styled(RadixTooltip.Arrow, {})

const Container = styled('div', {
  backgroundColor: 'tomato',
  borderRadius: 4,
  padding: '4px 8px',
  maxWidth: 320,
  fontSize: 14,
  lineHeight: '16px',
  color: '$gray1',

  '&::selection': {
    backgroundColor: '$primary11',
  },
})

export { Arrow, Container }

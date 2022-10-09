import { styled } from '@siakit/core'
import { Flex } from '@siakit/layout'

const Container = styled(Flex, {
  backgroundColor: '$cardBackground',
  boxShadow: '$sm',

  borderRadius: 8,
  border: '1px solid $gray3',

  transition: 'background-color 0.150s, border-color 0.150s',

  '&:focus': {
    boxShadow: 'none',
  },
})

export { Container }

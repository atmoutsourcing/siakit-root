import * as RadixAccordion from '@radix-ui/react-accordion'
import { styled } from '@siakit/core'

export const AccordionContainer = styled(RadixAccordion.Root, {
  flex: 1,

  display: 'flex',
  flexDirection: 'column',

  gap: 16,
})

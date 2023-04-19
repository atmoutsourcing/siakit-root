import * as RadixAccordion from '@radix-ui/react-accordion'

import { AccordionContainer } from './styles'

export function Accordion(
  props:
    | RadixAccordion.AccordionSingleProps
    | RadixAccordion.AccordionMultipleProps,
) {
  return <AccordionContainer {...props} />
}

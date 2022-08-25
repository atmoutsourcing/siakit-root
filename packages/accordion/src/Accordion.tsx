import { AccordionContainer } from './styles'

interface AccordionBaseProps {
  children: React.ReactNode
}

interface ImplAccordionSingleProps extends AccordionBaseProps {
  value?: string
  onValueChange?: (value: string) => void
}

interface AccordionSingleProps extends ImplAccordionSingleProps {
  type: 'single'
}

interface ImplAccordionMultipleProps extends AccordionBaseProps {
  value?: string[]
  onValueChange?: (value: string[]) => void
}

interface AccordionMultipleProps extends ImplAccordionMultipleProps {
  type: 'multiple'
}

type AccordionProps = AccordionSingleProps | AccordionMultipleProps

function Accordion({
  children,
  value,
  onValueChange,
  type,
  ...props
}: AccordionSingleProps | AccordionMultipleProps): JSX.Element {
  return (
    <AccordionContainer
      value={value as any}
      onValueChange={onValueChange as any}
      type={type}
      {...props}
    >
      {children}
    </AccordionContainer>
  )
}

export { Accordion }
export type { AccordionProps }

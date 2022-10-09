import { Children, cloneElement } from 'react'

import { FormErrorMessage } from '../FormErrorMessage'
import { Container } from './styles'

type FormControlProps = {
  children: React.ReactElement | React.ReactElement[]
  error?: string
  direction?: 'row' | 'column'
}

function FormControl({ children, error, direction }: FormControlProps) {
  const isErrored = !!error

  return (
    <Container direction={direction}>
      {Children.map(children, (child) => {
        return cloneElement(child, { isErrored })
      })}

      {isErrored && <FormErrorMessage>{error}</FormErrorMessage>}
    </Container>
  )
}

export { FormControl }
export type { FormControlProps }

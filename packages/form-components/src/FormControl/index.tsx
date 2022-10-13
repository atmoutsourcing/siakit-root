import { Children, cloneElement, ReactElement } from 'react'

import { FormErrorMessage } from '../FormErrorMessage'
import { FormControlContainer } from './styles'

type FormControlProps = {
  children: ReactElement | ReactElement[]
  error?: string
  direction?: 'row' | 'column'
}

export function FormControl({ children, error, direction }: FormControlProps) {
  const isErrored = !!error

  return (
    <FormControlContainer direction={direction}>
      {Children.map(children, (child) => {
        return cloneElement(child, { isErrored })
      })}

      {isErrored && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControlContainer>
  )
}

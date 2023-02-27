import { Children, cloneElement, ReactElement } from 'react'

import { FormErrorMessage } from '../FormErrorMessage'
import { FormControlContainer } from './styles'

type FormControlProps = {
  children: ReactElement | ReactElement[]
  error?: string
  direction?: 'row' | 'column'
  flex?: boolean
}

export function FormControl({
  children,
  error,
  direction,
  flex,
}: FormControlProps) {
  const isErrored = !!error

  return (
    <FormControlContainer
      direction={direction}
      css={flex ? { overflow: 'auto' } : {}}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, { isErrored })
      })}

      {isErrored && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControlContainer>
  )
}

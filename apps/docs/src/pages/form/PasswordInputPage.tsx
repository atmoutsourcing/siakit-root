import { useState } from 'react'

import { FormControl, FormLabel, PasswordInput } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function PasswordInputPage() {
  const [value, setValue] = useState('')

  return (
    <Flex direction="column" padding={32} gap={32}>
      <FormControl>
        <FormLabel>Full name</FormLabel>

        <PasswordInput
          placeholder="placeholder"
          value={value}
          onChange={setValue}
        />
      </FormControl>

      <FormControl error="Error message">
        <FormLabel>Full name</FormLabel>

        <PasswordInput
          placeholder="placeholder"
          value={value}
          onChange={setValue}
        />
      </FormControl>
    </Flex>
  )
}

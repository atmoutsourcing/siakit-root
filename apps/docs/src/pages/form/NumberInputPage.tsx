import { useState } from 'react'

import { FormControl, FormLabel, NumberInput } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function NumberInputPage() {
  const [value, setValue] = useState<number | undefined>(234)

  return (
    <Flex direction="column" padding={32} gap={32}>
      <FormControl>
        <FormLabel>Age</FormLabel>

        <NumberInput
          placeholder="placeholder"
          value={value}
          onChange={setValue}
        />
      </FormControl>

      <FormControl error="Error message">
        <FormLabel>Age</FormLabel>

        <NumberInput
          placeholder="placeholder"
          value={value}
          onChange={setValue}
        />
      </FormControl>
    </Flex>
  )
}

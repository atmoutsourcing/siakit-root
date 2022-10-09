import { useState } from 'react'

import { FormControl, FormLabel, PercentageInput } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function PercentageInputPage() {
  const [value, setValue] = useState(32)

  return (
    <Flex direction="column" padding={32} gap={32}>
      <FormControl>
        <FormLabel>Age</FormLabel>

        <PercentageInput
          placeholder="placeholder"
          value={value}
          onChange={setValue}
        />
      </FormControl>

      <FormControl error="Error message">
        <FormLabel>Age</FormLabel>

        <PercentageInput
          placeholder="placeholder"
          value={value}
          onChange={setValue}
        />
      </FormControl>
    </Flex>
  )
}

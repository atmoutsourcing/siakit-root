import { useState } from 'react'

import { FormControl, FormLabel, MoneyInput } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function MoneyInputPage() {
  const [value, setValue] = useState<string | undefined>('0')

  return (
    <Flex direction="column" padding={32} gap={32}>
      <FormControl>
        <FormLabel>Age</FormLabel>

        <MoneyInput
          placeholder="placeholder"
          value={value}
          onChange={(data) => setValue(data)}
        />
      </FormControl>

      <FormControl error="Error message">
        <FormLabel>Age</FormLabel>

        <MoneyInput
          placeholder="placeholder"
          value={value}
          onChange={(data) => setValue(data)}
        />
      </FormControl>
    </Flex>
  )
}

import { useState } from 'react'

import { FormControl, FormLabel, DatePicker } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function DatePickerPage() {
  const [value, setValue] = useState<Date | undefined>(new Date())

  return (
    <Flex direction="column" padding={32} gap={32}>
      <FormControl>
        <FormLabel>Full name</FormLabel>

        <DatePicker
          placeholder="placeholder"
          value={value}
          onChange={setValue}
        />
      </FormControl>

      <FormControl error="Error message">
        <FormLabel>Full name</FormLabel>

        <DatePicker
          placeholder="placeholder"
          value={value}
          onChange={setValue}
        />
      </FormControl>
    </Flex>
  )
}

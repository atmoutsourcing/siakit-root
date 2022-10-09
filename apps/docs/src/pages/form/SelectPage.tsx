import { useState } from 'react'

import {
  FormControl,
  FormLabel,
  Select,
  OptionType,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function SelectPage() {
  const [value, setValue] = useState<OptionType | null>(null)

  return (
    <Flex direction="column" padding={32} gap={32}>
      <FormControl>
        <FormLabel>Full name</FormLabel>

        <Select
          options={[
            { value: '1', label: 'Item 1' },
            {
              value: '2',
              label: 'Item 2',
            },
            { value: '3', label: 'Item 3' },
          ]}
          value={value}
          onChange={setValue}
          placeholder="placeholder here"
        />
      </FormControl>

      <FormControl error="Error message">
        <FormLabel>Full name</FormLabel>

        <Select
          options={[
            { value: '1', label: 'Item 1' },
            {
              value: '2',
              label: 'Item 2',
            },
            { value: '3', label: 'Item 3' },
          ]}
          value={value}
          onChange={setValue}
          placeholder="placeholder here"
        />
      </FormControl>
    </Flex>
  )
}

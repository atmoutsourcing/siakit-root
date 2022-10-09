import { useState } from 'react'

import {
  FormControl,
  FormLabel,
  SelectMulti,
  OptionType,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function SelectMultiPage() {
  const [value, setValue] = useState<OptionType[]>([])

  return (
    <Flex direction="column" padding={32} gap={32}>
      <FormControl>
        <FormLabel>Full name</FormLabel>

        <SelectMulti
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

        <SelectMulti
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

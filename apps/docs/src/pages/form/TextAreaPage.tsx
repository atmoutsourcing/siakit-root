import { useState } from 'react'

import { FormControl, FormLabel, TextArea } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function TextAreaPage() {
  const [value, setValue] = useState('')

  return (
    <Flex direction="column" padding={32} gap={32}>
      <FormControl>
        <FormLabel>Full name</FormLabel>

        <TextArea
          placeholder="placeholder"
          value={value}
          onChange={setValue}
          rows={10}
        />
      </FormControl>

      <FormControl error="Error message">
        <FormLabel>Full name</FormLabel>

        <TextArea placeholder="placeholder" value={value} onChange={setValue} />
      </FormControl>
    </Flex>
  )
}

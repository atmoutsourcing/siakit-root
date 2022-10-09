import { useState } from 'react'

import {
  FormControl,
  FormLabel,
  LanguagePicker,
  FlagOptionType,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function LanguagePickerPage() {
  const [value, setValue] = useState<FlagOptionType | null>(null)

  console.log(value)

  return (
    <Flex direction="column" padding={32} gap={32}>
      <FormControl>
        <FormLabel>Full name</FormLabel>

        <LanguagePicker
          value={value}
          onChange={setValue}
          placeholder="placeholder here"
        />
      </FormControl>

      <FormControl error="Error message">
        <FormLabel>Full name</FormLabel>

        <LanguagePicker
          value={value}
          onChange={setValue}
          placeholder="placeholder here"
        />
      </FormControl>
    </Flex>
  )
}

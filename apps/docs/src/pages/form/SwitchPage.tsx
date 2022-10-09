import { useState } from 'react'

import { FormControl, FormLabel, Switch } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function SwitchPage() {
  const [value, setValue] = useState(false)

  return (
    <Flex direction="column" padding={32} gap={32}>
      <FormControl>
        <FormLabel>Full name</FormLabel>

        <Switch value={value} onChange={(data) => setValue(data)} />
      </FormControl>

      <FormControl error="Error message" direction="row">
        <FormLabel>Full name</FormLabel>

        <Switch value={value} onChange={(data) => setValue(data)} />
      </FormControl>
    </Flex>
  )
}

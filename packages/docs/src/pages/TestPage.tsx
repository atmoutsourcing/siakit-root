import { useState } from 'react'

import { Button } from '@siakit/button'
import { DatePicker } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function TestPage() {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <Flex direction="column" gap padding>
      <DatePicker value={date} onChange={setDate} />

      <Button onClick={() => setDate(new Date())}>change value</Button>
    </Flex>
  )
}

import { Radio } from '@siakit/form-components'
import { Flex } from '@siakit/layout'

export function FormComponents() {
  return (
    <Flex flex padding>
      <Radio
        value=""
        onChange={console.log}
        options={[
          {
            value: 'low',
            label: 'Low',
            subtitle:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            value: 'medium',
            label: 'Medium',
            subtitle:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
          {
            value: 'high',
            label: 'High',
            subtitle:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          },
        ]}
      />
    </Flex>
  )
}

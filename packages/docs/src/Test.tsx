import { Button } from '@siakit/button'
import { Color, colors, useTheme } from '@siakit/core'
import { Flex, Grid } from '@siakit/layout'
import { Plus } from 'phosphor-react'
import { FormControl, FormLabel, TextInput } from '@siakit/form-components'
import { useState } from 'react'

export function Test() {
  const { changeColor } = useTheme()

  const [inputValue, setInputValue] = useState('')

  console.log(inputValue)

  return (
    <Flex flex direction="column" justify="center" gap overflow>
      <Flex as="section" gap align={'center'}>
        <Button size="sm">
          <Plus weight="bold" /> Button
        </Button>

        <Button>Button</Button>

        <Button size="lg">
          <Plus weight="bold" /> Button
        </Button>
      </Flex>

      <Grid maxWidth={640} columns={7} gap={8}>
        {Object.keys(colors).map((color) => (
          <Button
            key={color}
            onClick={() => changeColor(color as Color)}
            colorScheme={color as Color}
          >
            {color}
          </Button>
        ))}
      </Grid>

      <Flex gap={8} padding>
        <FormControl>
          <FormLabel>Text input label</FormLabel>
          <TextInput
            value={inputValue}
            onChange={setInputValue}
            placeholder="Text input placeholder"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Text input label</FormLabel>
          <TextInput
            value={inputValue}
            onChange={setInputValue}
            placeholder="Text input placeholder"
          />
        </FormControl>
      </Flex>
    </Flex>
  )
}

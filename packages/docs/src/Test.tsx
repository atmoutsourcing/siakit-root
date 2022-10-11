import { Button } from '@siakit/button'
import { Color, colors, useTheme } from '@siakit/core'
import { Flex, Grid } from '@siakit/layout'
import { Plus } from 'phosphor-react'

export function Test() {
  const { togggleTheme, changeColor } = useTheme()

  return (
    <Flex flex direction="column" justify="center" align="center" gap overflow>
      <Flex as="section" gap align={'center'}>
        <Button size="sm">
          <Plus weight="bold" /> Button
        </Button>

        <Button>Button</Button>

        <Button size="lg">
          <Plus weight="bold" /> Button
        </Button>
      </Flex>

      <Flex>
        <Button onClick={() => togggleTheme()}>Togggle theme</Button>
      </Flex>

      <Grid maxWidth={400} columns={7} gap={8}>
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
    </Flex>
  )
}

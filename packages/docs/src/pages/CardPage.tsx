import { DotsThree } from 'phosphor-react'

import { Card, CardHeader } from '@siakit/card'
import { IconButton } from '@siakit/icon-button'
import { Flex, Grid } from '@siakit/layout'
import { Text } from '@siakit/text'

export function CardPage() {
  return (
    <Grid columns={2} padding gap={8}>
      {new Array(3).fill('').map((item) => (
        <Card key={item} direction="column">
          <CardHeader title="Card title">
            <Flex padding="8px 0">
              <IconButton variant="ghost" colorScheme="gray">
                <DotsThree weight="bold" />
              </IconButton>
            </Flex>
          </CardHeader>

          <Flex padding>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              nobis, corrupti quod quidem, eum harum non itaque officiis
              voluptates totam accusamus in et! Accusamus voluptas explicabo,
              dolor ipsa earum porro!
            </Text>
          </Flex>
        </Card>
      ))}
    </Grid>
  )
}

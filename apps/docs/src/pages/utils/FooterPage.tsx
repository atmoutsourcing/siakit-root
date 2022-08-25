import { Button } from '@siakit/button'
import { Card } from '@siakit/card'
import { Footer, FooterLeft } from '@siakit/footer'
import { Flex } from '@siakit/layout'

export function FooterPage() {
  return (
    <Flex direction="column">
      <Card padding direction="column" gap={32}>
        <Footer>
          <Button type="button">Button</Button>
        </Footer>

        <Footer>
          <FooterLeft>
            <Button type="button">Button</Button>
          </FooterLeft>

          <Button type="button">Button</Button>
        </Footer>
      </Card>
    </Flex>
  )
}

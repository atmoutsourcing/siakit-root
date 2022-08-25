import { Alert, AlertText, AlertTitle } from '@siakit/alert'
import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'

export function AlertPage() {
  return (
    <Flex direction="column" gap>
      <Card padding direction="column" gap>
        <Alert type="info">
          <AlertTitle>title</AlertTitle>
          <AlertText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            ipsam pariatur totam cum accusantium quod magnam magni eveniet odio,
            omnis, maxime iste ipsa officiis dignissimos nam a assumenda libero
            ipsum.
          </AlertText>
        </Alert>

        <Alert type="success">
          <AlertTitle>title</AlertTitle>
          <AlertText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            ipsam pariatur totam cum accusantium quod magnam magni eveniet odio,
            omnis, maxime iste ipsa officiis dignissimos nam a assumenda libero
            ipsum.
          </AlertText>
        </Alert>

        <Alert type="warning">
          <AlertTitle>title</AlertTitle>
          <AlertText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            ipsam pariatur totam cum accusantium quod magnam magni eveniet odio,
            omnis, maxime iste ipsa officiis dignissimos nam a assumenda libero
            ipsum.
          </AlertText>
        </Alert>

        <Alert type="danger">
          <AlertTitle>title</AlertTitle>
          <AlertText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            ipsam pariatur totam cum accusantium quod magnam magni eveniet odio,
            omnis, maxime iste ipsa officiis dignissimos nam a assumenda libero
            ipsum.
          </AlertText>
        </Alert>
      </Card>
    </Flex>
  )
}

import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { Popover, PopoverTrigger, PopoverContent } from '@siakit/popover'
import { Text } from '@siakit/text'

export function PopoverPage() {
  return (
    <Flex direction="column">
      <Flex>
        <Popover>
          <PopoverTrigger>
            <Button type="button">Popover button</Button>
          </PopoverTrigger>
          <PopoverContent>
            <Flex padding>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi officiis sapiente sint deserunt quibusdam ea quidem
                aspernatur nisi provident nobis autem facere ex totam tempora,
                quisquam placeat adipisci vero soluta!
              </Text>
            </Flex>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>
  )
}

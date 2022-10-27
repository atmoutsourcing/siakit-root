import { Button } from '@siakit/button'
import { Footer } from '@siakit/footer'
import { Flex } from '@siakit/layout'
import { Modal, ModalTrigger, ModalContent } from '@siakit/modal'
import { Text } from '@siakit/text'

export function ModalPage() {
  return (
    <Flex flex align="center" justify="center">
      <Modal>
        <ModalTrigger>
          <Button type="button">show modal</Button>
        </ModalTrigger>

        <ModalContent title="Modal title">
          <Flex direction="column">
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quo
              cupiditate vitae ratione labore exercitationem similique,
              voluptate architecto omnis praesentium ad libero impedit aperiam
              nemo debitis magnam neque facilis nam.
            </Text>

            <Footer>
              <Button type="button" variant="ghost" colorScheme="gray">
                Cancel
              </Button>

              <Button type="button">Submit</Button>
            </Footer>
          </Flex>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

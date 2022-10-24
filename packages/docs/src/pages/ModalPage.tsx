import { Button } from '@siakit/button'
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
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quo
            cupiditate vitae ratione labore exercitationem similique, voluptate
            architecto omnis praesentium ad libero impedit aperiam nemo debitis
            magnam neque facilis nam.
          </Text>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

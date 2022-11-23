import { useState } from 'react'

import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { Modal, ModalContent } from '@siakit/modal'
import { Text } from '@siakit/text'

export function TestPage() {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  return (
    <>
      <Modal open={visible2} onOpenChange={setVisible2}>
        <ModalContent title="title 2">
          <Button onClick={() => setVisible2(true)}>open dialog</Button>
        </ModalContent>
      </Modal>

      <Modal open={visible} onOpenChange={setVisible}>
        <ModalContent title="title 1">
          <Button onClick={() => setVisible2(true)}>open dialog</Button>
        </ModalContent>
      </Modal>

      <Flex flex>
        <Button onClick={() => setVisible(true)}>open modal</Button>

        <Flex css={{ position: 'sticky', top: 0, backgroundColor: '$red9' }}>
          <Text>teste</Text>
        </Flex>
      </Flex>
    </>
  )
}

import { useState } from 'react'

import { Button } from '@siakit/button'
import { useDialog } from '@siakit/dialog'
import { Footer } from '@siakit/footer'
import { Flex } from '@siakit/layout'
import { Modal, ModalContent } from '@siakit/modal'
import { Text } from '@siakit/text'
import { useToast } from '@siakit/toast'

export function ModalPage() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)

  const { addDialog } = useDialog()
  const { addToast } = useToast()

  return (
    <Flex flex align="center" justify="center">
      <Modal open={modal1} onOpenChange={() => setModal1(false)}>
        <ModalContent title="Modal title">
          <Flex flex overflow direction="column">
            {new Array(20).fill('').map((item) => (
              <Text key={item}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Text>
            ))}
          </Flex>

          <Button type="button" onClick={() => setModal2(true)}>
            show modal
          </Button>
          <Footer>
            <Button type="button" variant="ghost" colorScheme="gray">
              Cancel
            </Button>

            <Button type="button">Submit</Button>
          </Footer>
        </ModalContent>
      </Modal>

      <Modal open={modal2} onOpenChange={() => setModal2(false)}>
        <ModalContent title="Modal title">
          <Flex flex overflow direction="column">
            {new Array(20).fill('').map((item) => (
              <Text key={item}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                quo cupiditate vitae ratione labore exercitationem similique,
                voluptate architecto omnis praesentium ad libero impedit aperiam
                nemo debitis magnam neque facilis nam.
              </Text>
            ))}
          </Flex>

          <Button
            type="button"
            onClick={() => {
              addDialog({
                type: 'success',
                title: 'title',
                description: 'description',
                onAction: () => {},
                actionText: 'sim',
              })
              addToast({ type: 'success', title: 'title', duration: 100000 })
              // setLoading(true)
            }}
          >
            show modal
          </Button>
          <Footer>
            <Button type="button" variant="ghost" colorScheme="gray">
              Cancel
            </Button>

            <Button type="button">Submit</Button>
          </Footer>
        </ModalContent>
      </Modal>

      <Button type="button" onClick={() => setModal1(true)}>
        show modal
      </Button>
    </Flex>
  )
}

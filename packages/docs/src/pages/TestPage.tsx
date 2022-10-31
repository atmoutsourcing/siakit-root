import { useState } from 'react'

import { Button } from '@siakit/button'
import { useDialog } from '@siakit/dialog'
import { Flex } from '@siakit/layout'
import { Modal, ModalContent } from '@siakit/modal'

export function TestPage() {
  const { addDialog } = useDialog()

  const [open, setOpen] = useState(false)

  function handleOpen() {
    addDialog({
      type: 'info',
      title: 'title',
      description: 'description',
      onAction: () => console.log('on action'),
      actionText: 'ok',
    })

    setTimeout(() => {
      setOpen(true)
    }, 2000)
  }

  return (
    <>
      <Modal open={open} onOpenChange={setOpen}>
        <ModalContent title="modal">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            maiores aspernatur exercitationem quasi consequuntur a vero nobis
            saepe esse. Expedita ducimus debitis molestiae illo possimus minima
            delectus velit molestias hic?
          </p>
        </ModalContent>
      </Modal>

      <Flex flex justify="center" align="center">
        <Button type="button" onClick={handleOpen}>
          show dialog
        </Button>
      </Flex>
    </>
  )
}

import { useState } from 'react'

import { Button } from '@siakit/button'
import { useDialog } from '@siakit/dialog'
import { Flex } from '@siakit/layout'
import { Modal, ModalContent } from '@siakit/modal'
import { Table } from '@siakit/table'

export function TestPage() {
  const { addDialog } = useDialog()

  const [open, setOpen] = useState(false)

  return (
    <>
      <Modal open={open} onOpenChange={setOpen}>
        <ModalContent title="title">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            ratione ullam sit provident quod at doloribus aut fugiat atque
            adipisci assumenda inventore cumque, exercitationem, voluptates qui
            minima ab et veniam.
          </p>

          <Button type="button" onClick={() => setOpen(false)}>
            close
          </Button>
        </ModalContent>
      </Modal>

      <Flex>
        <Table
          data={[{ name: 'name', age: 'age' }]}
          headers={[
            { label: 'Name', dataIndex: 'name' },
            { label: 'Age', dataIndex: 'age' },
          ]}
          actions={[
            {
              label: 'test',
              onClick: () =>
                addDialog({
                  type: 'info',
                  title: 'title',
                  description: 'description',
                  onAction: () => console.log('action'),
                  actionText: 'sim',
                }),
            },
            {
              label: 'modal',
              onClick: () => setOpen(true),
            },
          ]}
        />
      </Flex>
    </>
  )
}

import { useRef, useState } from 'react'

import { Button } from '@siakit/button'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '@siakit/dropdown'
import { Form, TimePicker, DatePicker, FormHandles } from '@siakit/form-unform'
import { Flex } from '@siakit/layout'
import { Modal, ModalContent } from '@siakit/modal'

export function TestPage() {
  const formRef = useRef<FormHandles>(null)

  const [modalVisible, setModalVisible] = useState(false)

  function handleSubmit(data: any) {
    console.log(data)
  }

  return (
    <>
      <Modal open={modalVisible} onOpenChange={setModalVisible}>
        <ModalContent title="title">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Flex direction="column" padding gap={8}>
              <TimePicker name="time" label="Time" placeholder="Time" />
              <DatePicker name="date" label="Date" placeholder="Date" />
              <Dropdown>
                <DropdownTrigger>
                  <Button type="button">dropdown</Button>
                </DropdownTrigger>
                <DropdownContent>
                  <DropdownItem>item 1</DropdownItem>
                  <DropdownItem>item 2</DropdownItem>
                  <DropdownItem>item 3</DropdownItem>
                  <DropdownItem>item 4</DropdownItem>
                </DropdownContent>
              </Dropdown>
            </Flex>
          </Form>
        </ModalContent>
      </Modal>

      <Flex>
        <Button type="button" onClick={() => setModalVisible(true)}>
          open modal
        </Button>
      </Flex>
    </>
  )
}

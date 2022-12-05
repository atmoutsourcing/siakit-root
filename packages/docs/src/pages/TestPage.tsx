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
import { Popover, PopoverTrigger, PopoverContent } from '@siakit/popover'
import { Text } from '@siakit/text'

export function TestPage() {
  const formRef = useRef<FormHandles>(null)

  const [modalVisible, setModalVisible] = useState(false)

  function handleSubmit(data: any) {
    console.log(data)
  }

  return (
    <Flex>
      <Popover>
        <PopoverTrigger>
          <Button type="button" onClick={() => setModalVisible(true)}>
            open modal
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            excepturi velit, totam adipisci officiis recusandae quibusdam esse
            dolor impedit incidunt vitae, veniam sint perspiciatis illo pariatur
            beatae ipsum in nobis?
          </Text>
        </PopoverContent>
      </Popover>
    </Flex>
  )
}

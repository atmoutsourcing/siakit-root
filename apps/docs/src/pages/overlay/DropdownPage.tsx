import { House } from 'phosphor-react'

import { Button } from '@siakit/button'
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
} from '@siakit/dropdown'
import { Flex } from '@siakit/layout'

export function DropdownPage() {
  return (
    <Flex>
      <Dropdown>
        <DropdownTrigger>
          <Button type="button">Dropdown</Button>
        </DropdownTrigger>

        <DropdownContent>
          <DropdownItem>item 1</DropdownItem>
          <DropdownSeparator />
          <DropdownLabel>label</DropdownLabel>
          <DropdownItem>item 1</DropdownItem>
          <DropdownItem icon={<House />}>item 1</DropdownItem>
          <DropdownItem type="info">item 1</DropdownItem>
          <DropdownItem type="success">item 1</DropdownItem>
          <DropdownItem type="warning">item 1</DropdownItem>
          <DropdownItem type="danger">item 1</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </Flex>
  )
}

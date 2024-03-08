import { Button } from '@siakit/button'
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from '@siakit/dropdown'
import { Flex } from '@siakit/layout'

export function DropdownComponent() {
  return (
    <Flex>
      <Dropdown>
        <DropdownTrigger>
          <Button>teste</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem
            disabled
            tooltip="voce nao tem moral"
            onClick={() => console.log('clicou')}
          >
            item 1
          </DropdownItem>
          <DropdownItem disabled tooltip="voce nao tem moral">
            item 2
          </DropdownItem>
          <DropdownItem>item 3</DropdownItem>
          <DropdownItem>item 4</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </Flex>
  )
}

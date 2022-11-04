import { Button } from "@siakit/button";
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from "@siakit/dropdown";
import { Flex } from "@siakit/layout";

export function DropdownPage() {
  return (
    <Flex flex align='end' justify='center'>
      <Dropdown>
        <DropdownTrigger>
          <Button type='button'>dropdown</Button>
        </DropdownTrigger>

        <DropdownContent>
          <DropdownItem onClick={() => console.log('item 1')}>item 1</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </Flex>
  )
}
import { Flex } from '@siakit/layout'
import {
  Sidebar,
  Menu,
  MenuHeader,
  MenuItem,
  SubMenu,
  SubMenuItem,
} from '@siakit/sidebar'
import { Text } from '@siakit/text'

export function SidebarPage() {
  return (
    <Flex flex>
      <Sidebar>
        <Menu>
          <MenuHeader>
            <Text>title</Text>
            <Text>title 2</Text>
          </MenuHeader>
          <MenuItem value="item-1">item 1</MenuItem>
        </Menu>

        <SubMenu value="item-1">
          <SubMenuItem onClick={() => console.log('item 1')}>
            item 1
          </SubMenuItem>
        </SubMenu>
      </Sidebar>
    </Flex>
  )
}

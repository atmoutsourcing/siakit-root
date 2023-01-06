import { House } from 'phosphor-react'

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

const items = [1, 2, 3]

function Item({ item }: { item: number }) {
  return (
    <SubMenuItem onClick={() => console.log(`item ${item}`)}>
      {String(item)}
    </SubMenuItem>
  )
}

export function SidebarPage() {
  return (
    <Flex flex>
      <Sidebar>
        <Menu>
          <MenuHeader>
            <Text>title</Text>
            <Text>title 2</Text>
          </MenuHeader>
          <MenuItem value="item-1" icon={<House />} tooltip="item-1">
            item 1
          </MenuItem>
          <MenuItem value="item-2" icon={<House />} tooltip="item-2">
            item 2
          </MenuItem>
          <MenuItem value="item-3" icon={<House />} tooltip="item-3">
            item 3
          </MenuItem>
        </Menu>

        <SubMenu value="item-1">
          <SubMenuItem onClick={() => console.log('item 1')} count={12}>
            item 1
          </SubMenuItem>
          <SubMenuItem onClick={() => console.log('item 1')} count={0}>
            item 2
          </SubMenuItem>
          <SubMenuItem onClick={() => console.log('item 1')}>
            item 3
          </SubMenuItem>
        </SubMenu>

        <SubMenu value="item-2">
          {items.map((item) => (
            <Item key={item} item={item} />
          ))}
        </SubMenu>

        <SubMenu value="item-3">
          <SubMenuItem onClick={() => console.log('item 1')}>
            item 1
          </SubMenuItem>
        </SubMenu>
      </Sidebar>
    </Flex>
  )
}

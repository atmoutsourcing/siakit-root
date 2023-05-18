import { Flex } from '@siakit/layout'
import {
  Sidebar as Root,
  Menu,
  MenuHeader,
  MenuItem,
  SubMenu,
  SubMenuItem,
  SubMenuTitle,
  SubMenuSeparator,
} from '@siakit/sidebar'

export function Sidebar() {
  return (
    <Flex flex>
      <Root>
        <Menu>
          <MenuHeader>
            <Flex>1</Flex>
            <Flex>2</Flex>
          </MenuHeader>
          <MenuItem value="item-1">item 1</MenuItem>
          <MenuItem value="item-2">item 2</MenuItem>
        </Menu>

        <SubMenu value="item-1">
          <SubMenuTitle>title</SubMenuTitle>
          <SubMenuItem onClick={() => console.log('item 1')}>
            item 1
          </SubMenuItem>
          <SubMenuSeparator />
          <SubMenuTitle>title</SubMenuTitle>
          <SubMenuItem onClick={() => console.log('item 1')}>
            item 1
          </SubMenuItem>
        </SubMenu>

        <SubMenu value="item-3">
          <SubMenuItem onClick={() => console.log('item 3')}>
            item 3
          </SubMenuItem>
        </SubMenu>
      </Root>
    </Flex>
  )
}

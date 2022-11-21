import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import { House, Timer, Cube, Moon, Sun } from 'phosphor-react'

import { Avatar } from '@siakit/avatar'
import { Button } from '@siakit/button'
import { useTheme } from '@siakit/core'
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
  DropdownItem,
} from '@siakit/dropdown'
import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'
import { PageHeader } from '@siakit/page-header'
// import {
//   Menu,
//   MenuTitle,
//   Sidebar,
//   MenuItem,
//   SubMenu,
//   SubMenuItem,
// } from '@siakit/sidebar'
import {
  Sidebar,
  Menu,
  MenuHeader,
  MenuItem,
  SubMenu,
  SubMenuItem,
  SubMenuTitle,
} from '@siakit/sidebar'

type DefaultLayoutProps = {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { theme, togggleTheme } = useTheme()
  const location = useLocation()

  return (
    <Flex flex overflow>
      <Sidebar>
        <Menu>
          <MenuHeader>
            <p>A</p>

            <p>B</p>
          </MenuHeader>

          <MenuItem
            value="option1"
            icon={<House weight="bold" />}
            type="action"
          >
            item 1
          </MenuItem>
          <MenuItem
            value="option2"
            icon={<Timer weight="bold" />}
            tooltip="Option 2"
          >
            item 2
          </MenuItem>
          <MenuItem value="option3" icon={<Cube weight="bold" />}>
            item 3
          </MenuItem>
        </Menu>

        <SubMenu value="option2">
          <SubMenuTitle>v. {1 + 1}</SubMenuTitle>
          {/* {new Array(30).fill().map((item, index) => (
            <SubMenuItem key={index} onClick={() => console.log('item 1')}>
              item {index}
            </SubMenuItem>
          ))} */}
        </SubMenu>

        <SubMenu value="option3">
          <SubMenuItem onClick={() => console.log('item 1')}>
            item 5
          </SubMenuItem>
          {/* <SubMenuItem onClick={() => console.log('item 1')}>item 6</SubMenuItem> */}
        </SubMenu>
      </Sidebar>

      <Flex flex direction="column" overflow>
        <PageHeader
          title="Title"
          onGoBack={
            location.pathname.split('/').filter((item) => Boolean(item)).length
              ? () => console.log('teste')
              : undefined
          }
          leftContent={
            <Button onClick={() => console.log('console')}>teste</Button>
          }
        >
          <Flex gap={8}>
            <IconButton
              variant="ghost"
              onClick={() => togggleTheme()}
              colorScheme="gray"
            >
              {theme === 'dark' ? (
                <Moon weight="bold" />
              ) : (
                <Sun weight="bold" />
              )}
            </IconButton>

            <Dropdown>
              <DropdownTrigger>
                <Avatar name="Bruno Fabre" size="sm" />
              </DropdownTrigger>

              <DropdownContent>
                <DropdownItem>item 1</DropdownItem>
              </DropdownContent>
            </Dropdown>
          </Flex>
        </PageHeader>

        {children}
      </Flex>
    </Flex>
  )
}

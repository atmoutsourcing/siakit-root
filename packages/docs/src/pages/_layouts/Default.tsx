import { ReactNode, useState } from 'react'

import { Moon, Sun } from 'phosphor-react'

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
import {
  Menu,
  MenuTitle,
  Sidebar,
  MenuItem,
  SubMenu,
  SubMenuItem,
} from '@siakit/sidebar'

type DefaultLayoutProps = {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { theme, togggleTheme } = useTheme()

  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <Flex flex overflow>
      <Sidebar
        open={sidebarVisible}
        onOpenChange={(value) => setSidebarVisible(value)}
      >
        <Menu>
          <MenuTitle>Connections</MenuTitle>

          {new Array(20).fill('').map((item, index) => (
            <MenuItem value={`option${index + 1}`} key={item}>
              Option 1
            </MenuItem>
          ))}
        </Menu>

        <SubMenu value="option1">
          {new Array(50).fill('').map((item, index) => (
            <SubMenuItem
              key={item}
              onClick={() => {
                console.log('navigate')
                setSidebarVisible(false)
              }}
            >
              Item item
            </SubMenuItem>
          ))}
        </SubMenu>

        <SubMenu value="option2">
          <SubMenuItem
            onClick={() => {
              console.log('navigate')
              setSidebarVisible(false)
            }}
          >
            item 1
          </SubMenuItem>
        </SubMenu>
      </Sidebar>

      <Flex flex direction="column" overflow>
        <PageHeader
          title="Title"
          onGoBack={() => console.log('on go back')}
          leftContent={
            <Button onClick={() => setSidebarVisible(true)}>teste</Button>
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

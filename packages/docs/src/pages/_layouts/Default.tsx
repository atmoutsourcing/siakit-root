import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { Menu, Sidebar, MenuItem, SubMenu, SubMenuItem } from '@siakit/sidebar'
import { ReactNode, useState } from 'react'

type DefaultLayoutProps = {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <Flex flex>
      <Sidebar
        open={sidebarVisible}
        onOpenChange={(value) => setSidebarVisible(value)}
      >
        <Menu>
          <MenuItem value="option1">option 1</MenuItem>
          <MenuItem value="option2">option 2</MenuItem>
          <MenuItem value="option3">option 3</MenuItem>
          <MenuItem value="option4">option 4</MenuItem>
          <MenuItem value="option5">option 5</MenuItem>
        </Menu>

        <SubMenu value="option1">
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

      <Flex direction="column">
        <Button onClick={() => setSidebarVisible(true)}>open sidebar</Button>

        {children}
      </Flex>
    </Flex>
  )
}

import { Outlet } from 'react-router-dom'

import { Moon, Sun } from 'phosphor-react'

import { Button } from '@siakit/button'
import { useTheme } from '@siakit/core'
import { Heading } from '@siakit/heading'
import { IconButton } from '@siakit/icon-button'
import { Flex, Grid } from '@siakit/layout'
import { Text } from '@siakit/text'

import { Sidebar } from '../../components/Sidebar'

export function DefaultLayout() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Flex width="100vw" height="100vh" direction="column">
      <Flex justify="center" padding="0 16px">
        <Grid
          maxWidth={1366}
          width="100%"
          height={64}
          columns="240px 1fr 240px"
        >
          <Flex align="center">
            <Heading>Docs</Heading>
          </Flex>

          <Flex align="center">
            <Text size="md">Search</Text>
          </Flex>

          <Flex justify="flex-end" align="center" gap={8}>
            <Button
              type="button"
              variant="ghost"
              onClick={() => window.open('https://github.com')}
            >
              GitHub
            </Button>
            <IconButton
              type="button"
              variant="ghost"
              icon={
                theme === 'light' ? (
                  <Sun weight="bold" />
                ) : (
                  <Moon weight="bold" />
                )
              }
              onClick={toggleTheme}
            />
          </Flex>
        </Grid>
      </Flex>

      <Flex flex justify="center" padding="0 16px" direction="column" overflow>
        <Grid
          flex
          maxWidth={1366}
          width="100%"
          height={64}
          columns="240px 1fr 240px"
        >
          <Sidebar />

          <Outlet />

          <Flex>
            <Text size="md">anchor</Text>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  )
}

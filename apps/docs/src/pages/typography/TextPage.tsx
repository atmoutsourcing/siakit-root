import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

export function TextPage() {
  return (
    <Flex direction="column" gap>
      <Text>Text component</Text>
      <Text lowContrast>Text component</Text>

      <Card padding>
        <Text size="md">
          One of the main advantages of Vitest is its unified configuration with
          Vite. If present, <code>vitest</code> will read your root{' '}
          <code>vite.config.ts</code> to match with the plugins and setup as
          your Vite app. For example, your Vite{' '}
          <a href="https://vitejs.dev/config/#resolve-alias">resolve.alias</a>{' '}
          and <a href="https://vitejs.dev/guide/using-plugins.html">plugins</a>{' '}
          configuration will work out-of-the-box. If you want a different{' '}
          <strong>configuration during</strong> testing, you can:
        </Text>
      </Card>
    </Flex>
  )
}

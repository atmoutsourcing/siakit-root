import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'

const codeString = `import { Button } from '@siakit/button'`

export function ButtonPage() {
  return (
    <Flex direction="column" gap>
      <Flex>
        <Button type="button">Button</Button>
      </Flex>

      <SyntaxHighlighter
        language="tsx"
        style={dracula}
        codeTagProps={{
          style: {
            fontSize: 14,
            fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
          },
        }}
      >
        {codeString}
      </SyntaxHighlighter>
      {/* <IconButton
          type="button"
          onClick={() => navigator.clipboard.writeText(codeString)}
          icon={<Copy />}
        /> */}
    </Flex>
  )
}

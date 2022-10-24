import { Flex } from '@siakit/layout'

export function TestPage() {
  return (
    <Flex>
      <div style={{ height: 16, width: 240, backgroundColor: 'gray' }}>
        <div
          style={{ height: 16, width: 200, backgroundColor: 'blueviolet' }}
        />
      </div>
    </Flex>
  )
}

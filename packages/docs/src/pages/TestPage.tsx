import { Card } from '@siakit/card'
import { Table } from '@siakit/table'

export function TestPage() {
  return (
    <Card flex margin>
      <Table
        headers={[
          {
            label: 'name',
            dataIndex: 'name',
          },
        ]}
        data={[]}
      />
    </Card>
  )
}

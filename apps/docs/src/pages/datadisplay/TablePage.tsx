import { Badge } from '@siakit/badge'
import { Flex } from '@siakit/layout'
import { Table } from '@siakit/table'

export function TablePage() {
  return (
    <Flex>
      <Table
        headers={[
          { label: 'Nome', dataIndex: 'name' },
          { label: 'Idade', dataIndex: 'age' },
          { label: 'Email', dataIndex: 'email' },
          {
            label: 'Active',
            dataIndex: 'active',
            render: ({ value }) => {
              if (value) {
                return <Badge color="green">Active</Badge>
              }

              return <Badge color="red">No active</Badge>
            },
          },
        ]}
        data={[
          {
            name: 'Bruno Fabre',
            age: 25,
            email: 'bruno@atmsistema.com.br',
            active: true,
          },
        ]}
        actions={[
          {
            label: 'Test',
            onClick: () => console.log('test action'),
          },
        ]}
      />
    </Flex>
  )
}

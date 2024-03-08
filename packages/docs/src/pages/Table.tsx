import { Flex } from '@siakit/layout'
import { Table as TableComponent } from '@siakit/table'

export function Table() {
  return (
    <Flex flex>
      <TableComponent
        headers={[
          { dataIndex: 'name', label: 'Name' },
          {
            dataIndex: 'age',
            label: 'Age',
            render: ({ value }: any) => <span>asd</span>,
          },
        ]}
        data={[
          {
            name: 'John Doe',
            age: 24,
          },
          {
            name: 'John Doe',
            age: 40,
          },
          {
            name: 'John Doe',
            age: 60,
          },
        ]}
        actions={[
          {
            label: 'Delete',
            type: 'danger',
            onClick: () => console.log('delete'),
            tooltip: 'teste de tooltip',
            visible: (item) => {
              if (item.age > 30 && item.age < 60) {
                return true
              }

              return false
            },
            disabled: true,
          },
        ]}
      />
    </Flex>
  )
}

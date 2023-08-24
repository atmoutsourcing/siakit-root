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
            age: 0,
          },
        ]}
        actions={[
          {
            label: 'Delete',
            type: 'danger',
            onClick: () => console.log('delete'),
            visible: false,
          },
        ]}
      />
    </Flex>
  )
}

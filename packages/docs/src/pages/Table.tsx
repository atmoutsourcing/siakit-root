import { Flex } from '@siakit/layout'
import { Table as TableComponent } from '@siakit/table'

export function Table() {
  return (
    <Flex flex>
      <TableComponent
        headers={[{ dataIndex: 'name', label: 'Name' }]}
        data={[
          {
            name: 'John Doe',
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

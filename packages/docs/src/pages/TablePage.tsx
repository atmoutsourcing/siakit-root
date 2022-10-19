import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'
import { Table } from '@siakit/table'
import { useEffect, useState } from 'react'

export function TablePage() {
  const totalCount = 600

  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(20)

  const [users, setUsers] = useState<any>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((result) => result.json())
      .then((result) => setUsers(result))
  }, [])

  return (
    <Flex flex direction="column" overflow>
      <Text>header</Text>

      <Table
        headers={[
          { label: 'ID', dataIndex: 'id' },
          { label: 'Nome', dataIndex: 'name' },
          { label: 'Email', dataIndex: 'email' },
          { label: 'Comentario', dataIndex: 'body' },
        ]}
        data={users}
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        perPage={perPage}
        perPageChange={setPerPage}
        actions={[{ label: 'test', onClick: (item) => console.log(item) }]}
      />

      <Text>footer</Text>
    </Flex>
  )
}

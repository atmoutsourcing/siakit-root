import { useState } from 'react'

import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { Modal, ModalContent, ModalTrigger } from '@siakit/modal'
import { Table } from '@siakit/table'
import { Text } from '@siakit/text'

export function TablePage() {
  const totalCount = 600

  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(20)

  const [users, setUsers] = useState<any>([
    {
      id: 'asdasdasd',
      name: 'Name',
      email: {
        type: 'IMEI',
        value: '354444075216178',
      },
      body: {
        type: 'ICCID',
        value: '89551018439005859869',
      },
    },
  ])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/comments')
  //     .then((result) => result.json())
  //     .then((result) => setUsers(result))
  // }, [])

  return (
    <Flex flex direction="column" overflow padding gap>
      <Flex>
        <Modal>
          <ModalTrigger>
            <Button type="button">show modal</Button>
          </ModalTrigger>

          <ModalContent title="modal title">
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio odit incidunt voluptatibus excepturi placeat
              dignissimos rerum et, necessitatibus harum omnis numquam sint
              exercitationem commodi aliquid, quis illo quisquam quo earum.
            </Text>
          </ModalContent>
        </Modal>
      </Flex>

      <Table
        headers={[
          { label: 'ID', dataIndex: 'id' },
          { label: 'Nome', dataIndex: 'name' },
          { label: 'Email', dataIndex: 'email' },
          { label: 'Comentario', dataIndex: 'body' },
          { label: 'Date', dataIndex: 'date', type: 'date' },
        ]}
        data={[
          { date: '2022-12-25T00:00:00.000Z' },
          {
            date: '2022-12-25T13:22:00.000Z',
          },
        ]}
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        perPage={perPage}
        perPageChange={setPerPage}
        actions={[{ label: 'test', onClick: (item) => console.log(item) }]}
      />
    </Flex>
  )
}

import { Flex } from '@siakit/layout'
import { Pagination } from '@siakit/pagination'
import { useState } from 'react'

export function PaginationPage() {
  const totalCount = 600

  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(20)

  return (
    <Flex direction="column">
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        perPage={perPage}
        perPageChange={setPerPage}
      />
    </Flex>
  )
}

import { useState } from 'react'

import { Flex } from '@siakit/layout'
import { Pagination } from '@siakit/pagination'

export function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(20)

  return (
    <Flex padding align="center" direction="column">
      <Pagination
        totalCount={1000}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        perPage={perPage}
        perPageChange={(amount) => setPerPage(amount)}
      />
    </Flex>
  )
}

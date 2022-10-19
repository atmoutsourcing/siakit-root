import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'
import { IconButton } from '@siakit/icon-button'

import { useEffect, useState } from 'react'
import { PaginationItem } from './PaginationItem'
import { HiOutlineDotsHorizontal } from './HiOutlineDotsHorizontal'
import { Select } from '@siakit/form-components'

const siblingsCount = 1

function generatePagesArray(from: number, to: number): number[] {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

const options = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
  { value: 200, label: '200' },
] as { value: number; label: string }[]

type OptionType = {
  value: number
  label: string
}

type PaginationProps = {
  totalCount: number

  currentPage: number
  onPageChange: (page: number) => void

  perPage: number
  perPageChange?: (amount: number) => void
}

export function Pagination({
  totalCount,
  currentPage,
  onPageChange,
  perPage,
  perPageChange,
}: PaginationProps) {
  const [valueSelected, setValueSelected] = useState<OptionType>({
    value: 20,
    label: '20',
  })

  useEffect(() => {
    const findOption = options.find((option) => option.value === perPage)

    if (findOption) {
      setValueSelected(findOption)
    }
  }, [perPage])

  const lastPage = Math.ceil(totalCount / perPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : []

  return (
    <Flex flexWrap="wrap" justify="between" align="center" width="100%">
      <Flex>
        <Text size="sm">
          <strong>{(currentPage - 1) * perPage}</strong> -{' '}
          <strong>
            {totalCount < currentPage * perPage
              ? totalCount
              : currentPage * perPage}
          </strong>{' '}
          de <strong>{totalCount}</strong>
        </Text>
      </Flex>

      <Flex gap={8} align="center">
        {!!perPageChange && (
          <Select
            options={options}
            value={valueSelected}
            onChange={(option) => {
              if (option) {
                setValueSelected(option as OptionType)
                perPageChange(Number(option.value))
              }
            }}
            menuPlacement="top"
            isClearable={false}
          />
        )}

        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />

            {currentPage > 2 + siblingsCount && (
              <IconButton
                type="button"
                variant="ghost"
                disabled
                colorScheme="gray"
              >
                <HiOutlineDotsHorizontal />
              </IconButton>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem
              key={page}
              number={page}
              onPageChange={onPageChange}
            />
          ))}

        <PaginationItem
          isCurrent
          number={currentPage}
          onPageChange={onPageChange}
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem
              key={page}
              number={page}
              onPageChange={onPageChange}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <IconButton
                type="button"
                variant="ghost"
                disabled
                colorScheme="gray"
              >
                <HiOutlineDotsHorizontal />
              </IconButton>
            )}

            <PaginationItem number={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </Flex>
    </Flex>
  )
}

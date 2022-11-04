import { ReactNode } from 'react'

import { useTheme } from '@siakit/core'

import { Container } from './styles'

type SortType = {
  direction: string
  dataIndex: string
}

type HeaderCellProps = {
  children: ReactNode
  isAction?: boolean
  dataIndex?: string
  isSort?: boolean
  sort?: SortType
  onSort?: (sort: SortType) => void
  align?: string
}

export function HeaderCell({
  children,
  isAction,
  dataIndex = '',
  isSort,
  sort,
  onSort,
  align,
}: HeaderCellProps) {
  const { theme } = useTheme()

  function toggleDirection(): void {
    if (onSort) {
      if (!sort?.direction) {
        onSort({ dataIndex, direction: 'ASC' })
      }

      if (sort?.direction === 'ASC') {
        onSort({ dataIndex, direction: 'DESC' })
      }

      if (sort?.direction === 'DESC') {
        onSort({ dataIndex, direction: '' })
      }
    }
  }

  return (
    <Container
      isActive={['ASC', 'DESC'].includes(sort?.direction ?? '')}
      isAction={isAction}
      isSort={isSort && !!onSort}
      onClick={isSort && onSort ? toggleDirection : undefined}
      type="button"
      css={{
        backgroundColor: theme === 'light' ? '$gray3' : '$gray4',
        justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      }}
    >
      {children}

      {isSort && onSort && !sort?.direction && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="gray"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <polyline
            points="112 176 80 208 48 176"
            fill="none"
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></polyline>
          <line
            x1="80"
            y1="48"
            x2="80"
            y2="208"
            fill="none"
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <polyline
            points="144 80 176 48 208 80"
            fill="none"
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></polyline>
          <line
            x1="176"
            y1="208"
            x2="176"
            y2="48"
            fill="none"
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
        </svg>
      )}

      {isSort && onSort && sort?.direction === 'ASC' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="#0091FF"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="128"
            y1="216"
            x2="128"
            y2="40"
            fill="none"
            stroke="#0091FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <polyline
            points="56 112 128 40 200 112"
            fill="none"
            stroke="#0091FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></polyline>
        </svg>
      )}

      {isSort && onSort && sort?.direction === 'DESC' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="#0091FF"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="128"
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke="#0091FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <polyline
            points="56 144 128 216 200 144"
            fill="none"
            stroke="#0091FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></polyline>
        </svg>
      )}
    </Container>
  )
}

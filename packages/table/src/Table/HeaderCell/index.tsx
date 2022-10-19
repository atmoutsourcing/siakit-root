import { useTheme } from '@siakit/core'
import { ReactNode } from 'react'

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
    </Container>
  )
}

import { Flex } from '@siakit/layout'
import { Pagination } from '@siakit/pagination'
import { ReactNode, useRef } from 'react'
import dot from 'dot-object'
import { Badge } from '@siakit/badge'
import { LinkButton } from '@siakit/link-button'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '@siakit/dropdown'
import { IconButton } from '@siakit/icon-button'

import {
  BodyCell,
  Content,
  TableContainer,
  ActionCell,
  FooterCell,
} from './styles'
import { HeaderCell } from './HeaderCell'
import { Color, useTheme } from '@siakit/core'

type ValueType = string | number | boolean
type ObjectType = { [key: string]: ValueType }

type RenderType = {
  value: ValueType | ObjectType
  item: { [key: string]: string } | { [key: string]: { [key: string]: string } }
}

type HeaderType = {
  label: string
  dataIndex: string
  sort?: string | null
  visible?: boolean
  render?: (data: RenderType) => ReactNode
  align?: 'left' | 'right'
}

type ActionType = {
  label: string
  type?: 'info' | 'success' | 'warning' | 'danger'
  onClick: (
    item:
      | { [key: string]: string }
      | { [key: string]: { [key: string]: string } },
  ) => void
}

type SortType = {
  direction: string
  dataIndex: string
}

type TableProps = {
  headers: HeaderType[]
  actions?: ActionType[]
  data: { [key: string]: any }[] | { [key: string]: { [key: string]: any } }[]
  footer?: { [key: string]: string }

  totalCount?: number
  currentPage?: number
  onPageChange?: (page: number) => void
  perPage?: number
  perPageChange?: (amount: number) => void

  sort?: SortType
  onSort?: (sort: SortType) => void

  exports?: () => void
}

export function Table({
  headers,
  actions = [],
  data,
  footer,

  totalCount,
  currentPage,
  onPageChange,
  perPage = 20,
  perPageChange,

  sort,
  onSort,

  exports,
}: TableProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { theme } = useTheme()

  const columns =
    headers.length && actions.length ? headers.length + 1 : headers.length

  const hasPagination =
    !!data.length &&
    currentPage !== undefined &&
    totalCount !== undefined &&
    onPageChange !== undefined

  return (
    <Flex flex gap direction="column" overflow>
      <TableContainer ref={containerRef}>
        <Content
          css={
            actions.length
              ? { gridTemplateColumns: `repeat(${columns - 1}, 1fr) 64px` }
              : { gridTemplateColumns: `repeat(${columns}, 1fr)` }
          }
        >
          {headers.map((field) => (
            <HeaderCell
              key={field.dataIndex}
              dataIndex={field.dataIndex}
              isSort={!!field.sort}
              sort={
                sort?.dataIndex === field.dataIndex
                  ? sort
                  : {
                      dataIndex: field.dataIndex,
                      direction: '',
                    }
              }
              onSort={onSort}
              align={field.align}
            >
              {field.label}
            </HeaderCell>
          ))}

          {!!actions.length && <HeaderCell isAction>Ações</HeaderCell>}

          {data.map((item) => (
            <>
              {headers.map((field) => {
                if (dot.pick(field.dataIndex, item) === null) {
                  return <BodyCell key={field.dataIndex} />
                }

                if (dot.pick(field.dataIndex, item) && field.render) {
                  return (
                    <BodyCell
                      key={field.dataIndex}
                      css={
                        field.align === 'right'
                          ? { justifyContent: 'flex-end' }
                          : {}
                      }
                    >
                      {field.render({
                        value: dot.pick(field.dataIndex, item),
                        item,
                      })}
                    </BodyCell>
                  )
                }

                if (
                  typeof dot.pick(field.dataIndex, item) === 'boolean' &&
                  field.render
                ) {
                  return (
                    <BodyCell
                      key={field.dataIndex}
                      css={
                        field.align === 'right'
                          ? { justifyContent: 'flex-end' }
                          : {}
                      }
                    >
                      {field.render({
                        value: dot.pick(field.dataIndex, item),
                        item,
                      })}
                    </BodyCell>
                  )
                }

                if (typeof dot.pick(field.dataIndex, item) === 'object') {
                  const { type, value } = dot.pick(field.dataIndex, item) as {
                    [key: string]: string
                  }

                  if (type === 'BADGE') {
                    const { color } = dot.pick(field.dataIndex, item) as {
                      [key: string]: string
                    }

                    return (
                      <BodyCell
                        key={field.dataIndex}
                        css={
                          field.align === 'right'
                            ? { justifyContent: 'flex-end' }
                            : {}
                        }
                      >
                        <Badge color={color.toLowerCase() as Color}>
                          {value}
                        </Badge>
                      </BodyCell>
                    )
                  }

                  if (type === 'URL') {
                    const { label } = dot.pick(field.dataIndex, item) as {
                      [key: string]: string
                    }

                    return (
                      <BodyCell
                        key={field.dataIndex}
                        css={
                          field.align === 'right'
                            ? { justifyContent: 'flex-end' }
                            : {}
                        }
                      >
                        <LinkButton
                          type="button"
                          onClick={() => window.open(value)}
                        >
                          {label}
                        </LinkButton>
                      </BodyCell>
                    )
                  }

                  if (type === 'ICCID') {
                    return (
                      <BodyCell
                        key={field.dataIndex}
                        css={
                          field.align === 'right'
                            ? { justifyContent: 'flex-end' }
                            : {}
                        }
                      >
                        <p>
                          {value.slice(0, 10)}
                          <span
                            style={{
                              fontWeight: 'bold',
                              color: 'var(--color-green)',
                            }}
                          >
                            {value.slice(10)}
                          </span>
                        </p>
                      </BodyCell>
                    )
                  }

                  if (type === 'IMEI') {
                    return (
                      <BodyCell
                        key={field.dataIndex}
                        css={
                          field.align === 'right'
                            ? { justifyContent: 'flex-end' }
                            : {}
                        }
                      >
                        <p>
                          {value.slice(0, 9)}
                          <span
                            style={{
                              fontWeight: 'bold',
                              color: 'var(--color-red)',
                            }}
                          >
                            {value.slice(9)}
                          </span>
                        </p>
                      </BodyCell>
                    )
                  }

                  return (
                    <BodyCell
                      key={field.dataIndex}
                      css={
                        field.align === 'right'
                          ? { justifyContent: 'flex-end' }
                          : {}
                      }
                    >
                      {JSON.stringify(dot.pick(field.dataIndex, item))}
                    </BodyCell>
                  )
                }

                if (field.dataIndex) {
                  return (
                    <BodyCell
                      key={field.dataIndex}
                      css={
                        field.align === 'right'
                          ? { justifyContent: 'flex-end' }
                          : {}
                      }
                    >
                      {dot.pick(field.dataIndex, item)}
                    </BodyCell>
                  )
                }

                return <BodyCell key={field.dataIndex} />
              })}

              {!!actions.length && (
                <ActionCell>
                  <Dropdown>
                    <DropdownTrigger>
                      <IconButton
                        type="button"
                        variant="ghost"
                        colorScheme="gray"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </IconButton>
                    </DropdownTrigger>

                    <DropdownContent align="end">
                      {actions.map((action) => (
                        <DropdownItem
                          key={action.label}
                          onClick={() => action.onClick(item)}
                          type={action.type}
                        >
                          {action.label}
                        </DropdownItem>
                      ))}
                    </DropdownContent>
                  </Dropdown>
                </ActionCell>
              )}
            </>
          ))}

          {footer &&
            headers.map(
              (header) =>
                header.dataIndex && (
                  <FooterCell
                    key={header.dataIndex}
                    css={{
                      backgroundColor: theme === 'light' ? '$gray3' : '$gray4',
                      justifyContent:
                        header.align === 'right' ? 'flex-end' : 'flex-start',
                    }}
                  >
                    {footer[header.dataIndex]}
                  </FooterCell>
                ),
            )}

          {footer && actions.length && (
            <FooterCell
              isAction
              css={{ backgroundColor: theme === 'light' ? '$gray3' : '$gray4' }}
            />
          )}
        </Content>
      </TableContainer>

      {(hasPagination || !!exports) && (
        <Flex gap>
          <>
            {!!exports && exports()}

            {hasPagination && (
              <Pagination
                totalCount={totalCount}
                currentPage={currentPage}
                onPageChange={(value) => {
                  onPageChange(value)

                  if (containerRef.current) {
                    containerRef.current.scrollTo(0, 0)
                  }
                }}
                perPage={perPage}
                perPageChange={(value) => {
                  if (perPageChange) {
                    perPageChange(value)
                  }

                  if (containerRef.current) {
                    containerRef.current.scrollTo(0, 0)
                  }
                }}
              />
            )}
          </>
        </Flex>
      )}
    </Flex>
  )
}

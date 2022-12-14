import dot from 'dot-object'

import { Badge } from '@siakit/badge'
import { Color, useTheme } from '@siakit/core'
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
  DropdownItem,
} from '@siakit/dropdown'
import { Empty } from '@siakit/empty'
import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'
import { LinkButton } from '@siakit/link-button'
import { Pagination } from '@siakit/pagination'

import { HeaderCell } from './HeaderCell'
import { ActionCell, BodyCell, Container, Content, FooterCell } from './styles'

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
  render?: (data: RenderType) => React.ReactNode
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

interface TableProps {
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
}

function Table({
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

  ...props
}: TableProps): JSX.Element {
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
      <Container {...props}>
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

          {!!actions.length && <HeaderCell isAction>A????es</HeaderCell>}

          {data.map((item) => (
            <>
              {headers.map((field) => {
                if (dot.pick(field.dataIndex, item) === null) {
                  return <BodyCell />
                }

                if (dot.pick(field.dataIndex, item) && field.render) {
                  return (
                    <BodyCell
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

                return <BodyCell />
              })}

              {!!actions.length && (
                <ActionCell>
                  <Dropdown>
                    <DropdownTrigger>
                      <IconButton
                        type="button"
                        variant="ghost"
                        colorScheme="gray"
                        icon={
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
                        }
                      />
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
      </Container>

      {!data.length && (
        <Empty
          title="Nenhum dado encontrado"
          description="Adicione um filtro e tente novamente."
        />
      )}

      {(hasPagination || !!exports) && (
        <Flex gap>
          <>
            {!!exports && exports()}

            {hasPagination && (
              <Pagination
                totalCount={totalCount}
                currentPage={currentPage}
                onPageChange={onPageChange}
                perPage={perPage}
                perPageChange={perPageChange}
              />
            )}
          </>
        </Flex>
      )}
    </Flex>
  )
}

export { Table }
export type { TableProps }

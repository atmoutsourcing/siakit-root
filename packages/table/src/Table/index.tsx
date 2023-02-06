import { ReactNode, useRef } from 'react'

import { format, addHours } from 'date-fns'
import dot from 'dot-object'

import { Badge } from '@siakit/badge'
import { Color, useTheme } from '@siakit/core'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
} from '@siakit/dropdown'
import { Heading } from '@siakit/heading'
import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'
import { LinkButton } from '@siakit/link-button'
import { Pagination } from '@siakit/pagination'
import { Text } from '@siakit/text'

import { HeaderCell } from './HeaderCell'
import {
  BodyCell,
  Content,
  TableContainer,
  ActionCell,
  FooterCell,
} from './styles'

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
  renderType?: 'date' | 'maps'
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

                if (field.renderType === 'date') {
                  const value = dot.pick(field.dataIndex, item)

                  if (!value) {
                    return <BodyCell key={field.dataIndex} />
                  }

                  if (value.includes('T00:00:00.000Z')) {
                    return (
                      <BodyCell
                        key={field.dataIndex}
                        css={
                          field.align === 'right'
                            ? { justifyContent: 'flex-end' }
                            : {}
                        }
                      >
                        {format(addHours(new Date(value), 3), 'dd/MM/yyyy')}
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
                      {format(new Date(value), 'dd/MM/yyyy HH:mm')}
                    </BodyCell>
                  )
                }

                if (field.renderType === 'maps') {
                  const latitude = dot.pick('latitude', item)
                  const longitude = dot.pick('longitude', item)

                  if (!latitude || !longitude) {
                    return <BodyCell key={field.dataIndex} />
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
                        onClick={() =>
                          window.open(
                            `https://google.com/maps/place/${latitude},${longitude}`,
                          )
                        }
                      >
                        Ver no mapa
                      </LinkButton>
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
                        <Text>{value.slice(0, 10)}</Text>
                        <Text css={{ color: '$green9', fontWeight: 'bold' }}>
                          {value.slice(10)}
                        </Text>
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
                        <Text>{value.slice(0, 9)}</Text>
                        <Text css={{ color: '$red9', fontWeight: 'bold' }}>
                          {value.slice(9)}
                        </Text>
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
                      {actions.map((action) =>
                        action.label === '-' ? (
                          <DropdownSeparator key={action.label} />
                        ) : (
                          <DropdownItem
                            key={action.label}
                            onClick={() => action.onClick(item)}
                            type={action.type}
                          >
                            {action.label}
                          </DropdownItem>
                        ),
                      )}
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

      {!data.length && (
        <Flex flex align="center" justify="center">
          <Flex direction="column" gap={8} maxWidth={320}>
            <Heading size="xs" weight="medium" align="center">
              Nenhum dado encontrado
            </Heading>

            <Text size="sm" lowContrast align="center">
              Adicione um filtro ou adicione uma informação para listar
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

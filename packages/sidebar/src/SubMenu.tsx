import { Children, cloneElement, ReactElement, useContext } from 'react'

import { styled } from '@siakit/core'

import { SidebarContext } from './Sidebar'

type SubMenuProps = {
  children: ReactElement | ReactElement[]
  value: string | number
}

const Container = styled('div', {
  width: 192,
  backgroundColor: '$shape',
  borderRight: '1px solid $gray4',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',

  '@media(max-width: 992px)': {
    display: 'none',
  },
})

export function SubMenu({ children, value }: SubMenuProps) {
  const { selected } = useContext(SidebarContext)

  if (value !== selected) {
    return <></>
  }

  return (
    <Container>
      {Array.isArray(children) ? (
        <>
          {Children.map(children, (child) => {
            return cloneElement(child, { ...child.props }, child.props.children)
          })}
        </>
      ) : (
        <>
          {cloneElement(
            children,
            { ...children.props },
            children.props.children,
          )}
        </>
      )}
    </Container>
  )
}

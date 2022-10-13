import { Children, cloneElement } from 'react'
import { SubMenuContainer } from './styles'

type SubMenuProps = {
  children: any
  value: string
}

export function SubMenu({ children, value }: SubMenuProps) {
  return (
    <SubMenuContainer key={value}>
      {Children.map(children, (child, index) => {
        return cloneElement(
          child,
          { ...child.props, index },
          child.props.children,
        )
      })}
    </SubMenuContainer>
  )
}

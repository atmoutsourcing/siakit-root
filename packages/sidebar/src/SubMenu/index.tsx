import { Children, cloneElement } from 'react'

import {
  StyledScrollArea,
  StyledViewport,
  StyledScrollbar,
  StyledThumb,
  SubMenuContainer,
} from './styles'

type SubMenuProps = {
  children: any
  value: string
}

export function SubMenu({ children, value }: SubMenuProps) {
  return (
    <StyledScrollArea>
      <StyledViewport>
        <SubMenuContainer key={value}>
          {Children.map(children, (child, index) => {
            return cloneElement(
              child,
              { ...child.props, index },
              child.props.children,
            )
          })}
        </SubMenuContainer>
      </StyledViewport>

      <StyledScrollbar orientation="vertical">
        <StyledThumb />
      </StyledScrollbar>
    </StyledScrollArea>
  )
}

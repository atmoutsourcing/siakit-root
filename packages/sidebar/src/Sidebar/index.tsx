import { ReactNode, useContext, useEffect, useMemo } from 'react'
import { SidebarContext, SidebarProvider } from '../contexts/SidebarContext'
import { SidebarContainer, SidebarOverlay } from './styles'

type SidebarComponentProps = {
  children: any
  open: boolean
  onOpenChange: (value: boolean) => void
}

function SidebarComponent({
  children,
  open,
  onOpenChange,
}: SidebarComponentProps) {
  const { menuItemSelected, isExpanded, changeExpanded } =
    useContext(SidebarContext)

  const childrenIsArray = useMemo(() => Array.isArray(children), [children])

  useEffect(() => {
    if (childrenIsArray) {
      const findSubMenu = children.find(
        (child: any) =>
          child?.type.name === 'SubMenu' &&
          child?.props.value === menuItemSelected,
      )

      if (!menuItemSelected || (menuItemSelected && !findSubMenu)) {
        changeExpanded(true)
      } else {
        changeExpanded(false)
      }
    } else {
      changeExpanded(true)
    }
  }, [menuItemSelected, childrenIsArray])

  return (
    <>
      {open && <SidebarOverlay onClick={() => onOpenChange(false)} />}

      <SidebarContainer isOpen={open}>
        {childrenIsArray ? children[0] : children}

        {childrenIsArray &&
          !isExpanded &&
          children.find(
            (child: any) =>
              child?.type.name === 'SubMenu' &&
              child?.props.value === menuItemSelected,
          )}
      </SidebarContainer>
    </>
  )
}

type SidebarProps = {
  children: ReactNode
  open: boolean
  onOpenChange: (value: boolean) => void
}

export function Sidebar({ children, open, onOpenChange }: SidebarProps) {
  return (
    <SidebarProvider>
      <SidebarComponent open={open} onOpenChange={onOpenChange}>
        {children}
      </SidebarComponent>
    </SidebarProvider>
  )
}

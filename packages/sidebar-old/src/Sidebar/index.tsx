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
      if (Array.isArray(children[1])) {
        const findSubMenu = children[1].find(
          (child: any) =>
            child?.type?.name === 'SubMenu' &&
            child?.props?.value === menuItemSelected,
        )

        if (!menuItemSelected || (menuItemSelected && !findSubMenu)) {
          changeExpanded(true)
        } else {
          changeExpanded(false)
        }
      } else {
        const findSubMenu = children.find(
          (child: any) =>
            child?.type?.name === 'SubMenu' &&
            child?.props?.value === menuItemSelected,
        )

        if (!menuItemSelected || (menuItemSelected && !findSubMenu)) {
          changeExpanded(true)
        } else {
          changeExpanded(false)
        }
      }
    } else {
      changeExpanded(true)
    }
  }, [menuItemSelected, childrenIsArray])

  return (
    <>
      <SidebarContainer isOpen={open}>
        {childrenIsArray ? children[0] : children}

        {childrenIsArray && !isExpanded && (
          <>
            {Array.isArray(children[1])
              ? children[1].find(
                  (child: any) =>
                    child?.type?.name === 'SubMenu' &&
                    child?.props?.value === menuItemSelected,
                )
              : children.find(
                  (child: any) =>
                    child?.type?.name === 'SubMenu' &&
                    child?.props?.value === menuItemSelected,
                )}
          </>
        )}
      </SidebarContainer>

      {open && <SidebarOverlay onClick={() => onOpenChange(false)} />}
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

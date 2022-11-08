import { createContext, ReactNode, useState } from 'react'

type SidebarContextData = {
  menuItemSelected: string
  selectMenuItem: (value: string) => void
  subMenuItemSelected: number | null
  selectSubMenuItem: (value: number | null) => void
  isExpanded: boolean
  changeExpanded: (value: boolean) => void
  isOpen: boolean
  changeOpen: (value: boolean) => void
}

export const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData,
)

type SidebarProviderProps = {
  children: ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [menuItemSelected, setMenuItemSelected] = useState('')
  const [subMenuItemSelected, setSubMenuItemSelected] = useState<number | null>(
    null,
  )
  const [isExpanded, setIsExpanded] = useState(true)
  const [isOpen, setIsOpen] = useState(true)

  function selectMenuItem(value: string): void {
    setMenuItemSelected(value)
    setSubMenuItemSelected(null)
  }

  function selectSubMenuItem(value: number | null): void {
    setSubMenuItemSelected(value)
  }

  function changeExpanded(value: boolean): void {
    setIsExpanded(value)
  }

  function changeOpen(value: boolean): void {
    setIsOpen(value)
  }

  return (
    <SidebarContext.Provider
      value={{
        menuItemSelected,
        selectMenuItem,
        subMenuItemSelected,
        selectSubMenuItem,
        isExpanded,
        changeExpanded,
        isOpen,
        changeOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

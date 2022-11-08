import { createContext, ReactNode, useState } from 'react'

type SidebarProps = {
  children: ReactNode[]
}

type SidebarContextData = {
  selected: string | number | null
  selectMenu: (menu: string | number | null) => void
  subMenuSelected: number | null
  selectSubMenu: (index: number | null) => void
}

export const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData,
)

export function Sidebar({ children }: SidebarProps) {
  const [selected, setSelected] = useState<string | number | null>(null)
  const [subMenuSelected, setSubMenuSelected] = useState<number | null>(null)

  function selectMenu(menu: string | number | null) {
    setSelected(menu)
    setSubMenuSelected(null)
  }

  function selectSubMenu(index: number | null) {
    setSubMenuSelected(index)
  }

  return (
    <SidebarContext.Provider
      value={{ selected, selectMenu, subMenuSelected, selectSubMenu }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

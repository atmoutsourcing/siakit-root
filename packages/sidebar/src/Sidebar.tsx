import { createContext, ReactNode, useState } from 'react'

type SidebarProps = {
  children: ReactNode[]
}

type SelectMenuData = {
  value: string | number | null
  minimize: boolean
}

type SidebarContextData = {
  minimized: boolean
  selected: string | number | null
  selectMenu: (data: SelectMenuData) => void
  subMenuSelected: number | string | null
  selectSubMenu: (index: number | string | null) => void
}

export const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData,
)

export function Sidebar({ children }: SidebarProps) {
  const [selected, setSelected] = useState<string | number | null>(null)
  const [subMenuSelected, setSubMenuSelected] = useState<
    number | string | null
  >(null)
  const [minimized, setMinimized] = useState(false)

  function selectMenu({ value, minimize }: SelectMenuData) {
    setSelected(value)
    setSubMenuSelected(null)
    setMinimized(minimize)
  }

  function selectSubMenu(index: number | string | null) {
    setSubMenuSelected(index)
  }

  return (
    <SidebarContext.Provider
      value={{
        minimized,
        selected,
        selectMenu,
        subMenuSelected,
        selectSubMenu,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

import { createContext, ReactNode, useEffect, useState } from 'react'

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

type SidebarProps = {
  children: ReactNode[]
  menu?: string | number | null
  onMenuChange?: (value: string | number | null) => void
  subMenu?: string | number | null
  onSubMenuChange?: (value: string | number | null) => void
}

export function Sidebar({
  children,
  menu = null,
  onMenuChange,
  subMenu = null,
  onSubMenuChange,
}: SidebarProps) {
  const [selected, setSelected] = useState<string | number | null>(null)
  const [subMenuSelected, setSubMenuSelected] = useState<
    number | string | null
  >(null)
  const [minimized, setMinimized] = useState(false)

  useEffect(() => {
    if (menu === selected) {
      return
    }

    if (subMenu === subMenuSelected) {
      return
    }

    setSelected(menu)
    setSubMenuSelected(subMenuSelected)
    setMinimized(true)
  }, [menu])

  function selectMenu({ value, minimize }: SelectMenuData) {
    setSelected(value)
    setSubMenuSelected(null)
    setMinimized(minimize)

    if (onMenuChange) {
      onMenuChange(value)
    }
  }

  function selectSubMenu(index: number | string | null) {
    setSubMenuSelected(index)

    if (onSubMenuChange) {
      onSubMenuChange(index)
    }
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

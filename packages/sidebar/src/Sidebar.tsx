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
  value?: string | number | null
  onChange?: (value: string | number | null) => void
}

export function Sidebar({ children, value = null, onChange }: SidebarProps) {
  const [selected, setSelected] = useState<string | number | null>(null)
  const [subMenuSelected, setSubMenuSelected] = useState<
    number | string | null
  >(null)
  const [minimized, setMinimized] = useState(false)

  useEffect(() => {
    if (value === selected) {
      return
    }

    setSelected(value)
    setSubMenuSelected(null)
    setMinimized(true)
  }, [value])

  function selectMenu({ value, minimize }: SelectMenuData) {
    setSelected(value)
    setSubMenuSelected(null)
    setMinimized(minimize)

    if (onChange) {
      onChange(value)
    }
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

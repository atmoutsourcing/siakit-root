import { useTheme } from '@siakit/core'

import { ClearIndicatorCustom } from '../components/ClearIndicatorCustom'
import { OptionType } from '../types/OptionType'
import { Container } from './styles'

type SelectMultiProps = {
  options: OptionType[]
  value: OptionType[]
  onChange: (option: OptionType[]) => void
  placeholder?: string
  menuPlacement?: 'auto' | 'bottom' | 'top'
  isClearable?: boolean
}

function SelectMulti({
  options,
  value,
  onChange,
  placeholder = '',
  menuPlacement = 'auto',
  isClearable = true,
  ...props
}: SelectMultiProps) {
  const { themeKeys } = useTheme()

  return (
    <Container
      options={options}
      placeholder={placeholder}
      classNamePrefix="react-select"
      menuPlacement={menuPlacement}
      isClearable={isClearable}
      components={{
        ClearIndicator: ClearIndicatorCustom,
      }}
      value={value}
      onChange={(data) => onChange(data as OptionType[])}
      menuPortalTarget={document.body}
      isMulti
      styles={{
        menuPortal: (base) => ({
          ...base,
          zIndex: 9900,
          pointerEvents: 'auto',
        }),
        menu: (provided) => ({
          ...provided,
          borderRadius: 8,
          backgroundColor: `var(${themeKeys.colors.cardBackground.variable})`,
          border: `1px solid var(${themeKeys.colors.gray3.variable})`,
          padding: '8px 0',
        }),
        menuList: (base) => ({
          ...base,
          padding: 0,
        }),
        option: (base, state) => ({
          ...base,
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',

          fontSize: '14px',
          color: `var(${themeKeys.colors.gray12.variable})`,

          cursor: 'pointer',

          transition: 'all 0.1s',

          '&:hover': {
            backgroundColor: `var(${themeKeys.colors.primary4.variable})`,
          },

          backgroundColor: state.isSelected
            ? `var(${themeKeys.colors.primary6.variable})`
            : state.isFocused
            ? `var(${themeKeys.colors.primary3.variable})`
            : `var(${themeKeys.colors.cardBackground.variable})`,
        }),
      }}
      {...props}
    />
  )
}

export { SelectMulti }
export type { SelectMultiProps, OptionType }

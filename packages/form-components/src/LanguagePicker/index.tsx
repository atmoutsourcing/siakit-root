import { useTheme } from '@siakit/core'

import { ClearIndicatorCustom } from '../components/ClearIndicatorCustom'
import { FlagOptionType } from '../types/FlagOptionType'
import { OptionType } from '../types/OptionType'
import { BrasilFlag } from './flags/brasil-flag'
import { EspanhaFlag } from './flags/espanha-flag'
import { EstadosUnidosFlag } from './flags/estados-unidos-flag'
import { Container, LanguageItem } from './styles'

const options = [
  {
    label: 'Português do Brasil',
    value: 'pt_BR',
    flag: <BrasilFlag />,
  },
  {
    label: 'English, US',
    value: 'en_US',
    flag: <EstadosUnidosFlag />,
  },
  { label: 'Español', value: 'es_ES', flag: <EspanhaFlag /> },
]

type LanguagePickerProps = {
  value: FlagOptionType | null
  onChange: (option: FlagOptionType) => void
  placeholder?: string
  menuPlacement?: 'auto' | 'bottom' | 'top'
  isClearable?: boolean
}

function LanguagePicker({
  value,
  onChange,
  placeholder = '',
  menuPlacement = 'auto',
  isClearable = true,
  ...props
}: LanguagePickerProps) {
  const { themeKeys } = useTheme()

  function formatOptionLabel(data: unknown): React.ReactNode {
    const { label: optionLabel, flag } = data as FlagOptionType

    return (
      <LanguageItem style={{ display: 'flex', gap: 8 }}>
        {flag}

        <p>{optionLabel}</p>
      </LanguageItem>
    )
  }

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
      onChange={(data) => onChange(data as FlagOptionType)}
      menuPortalTarget={document.body}
      formatOptionLabel={formatOptionLabel}
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

export { LanguagePicker }
export type { LanguagePickerProps, OptionType }

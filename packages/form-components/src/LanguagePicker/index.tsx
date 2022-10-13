import { themeKeys } from '@siakit/core'
import { IconButton } from '@siakit/icon-button'
import { BrasilFlag } from './flags/brasil-flag'
import { EspanhaFlag } from './flags/espanha-flag'
import { EstadosUnidosFlag } from './flags/estados-unidos-flag'

import { LanguageItem, LanguagePickerContainer } from './styles'

function ClearIndicatorCustom({ innerProps }: any) {
  return (
    <IconButton
      type="button"
      size="sm"
      variant="ghost"
      colorScheme="gray"
      tabIndex={-1}
      {...innerProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </IconButton>
  )
}

type FlagOptionType = {
  value: string
  label: string
  flag: string
}

type LanguagePickerProps = {
  value: FlagOptionType | null
  onChange: (value: FlagOptionType | null) => void
  placeholder?: string
  disabled?: boolean
  menuPlacement?: 'auto' | 'bottom' | 'top'
}

type RestProps = {
  isErrored: boolean
}

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

function formatOptionLabel(data: unknown) {
  const { label: optionLabel, flag } = data as FlagOptionType

  return (
    <LanguageItem>
      {flag}

      <p>{optionLabel}</p>
    </LanguageItem>
  )
}

export function LanguagePicker({
  value,
  onChange,
  placeholder = '',
  disabled,
  menuPlacement,
  ...props
}: LanguagePickerProps) {
  const { isErrored } = props as RestProps

  return (
    <LanguagePickerContainer
      options={options}
      placeholder={placeholder}
      classNamePrefix="react-select"
      menuPlacement={menuPlacement}
      isDisabled={disabled}
      isClearable={true}
      components={{
        ClearIndicator: ClearIndicatorCustom,
      }}
      value={value}
      onChange={(data) => onChange(data as FlagOptionType)}
      menuPortalTarget={document.body}
      formatOptionLabel={formatOptionLabel}
      isErrored={isErrored}
      styles={{
        menuPortal: (base) => ({
          ...base,
          zIndex: 9900,
          pointerEvents: 'auto',
        }),
        menu: (provided) => ({
          ...provided,
          borderRadius: 8,
          backgroundColor: `var(${themeKeys.colors.shape.variable})`,
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
            : `var(${themeKeys.colors.shape.variable})`,
        }),
      }}
      {...props}
    />
  )
}

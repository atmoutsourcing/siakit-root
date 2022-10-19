import { themeKeys } from '@siakit/core'
import { IconButton } from '@siakit/icon-button'

import { SelectContainer } from './styles'

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

type OptionStringType = {
  value: string
  label: string
}

type OptionNumberType = {
  value: number
  label: string
}

export type OptionType = OptionStringType | OptionNumberType

type SelectProps = {
  value: OptionType | null
  onChange: (value: OptionType | null) => void
  options: OptionType[]
  placeholder?: string
  disabled?: boolean
  menuPlacement?: 'auto' | 'bottom' | 'top'
  isClearable?: boolean
}

type RestProps = {
  isErrored: boolean
}

export function Select({
  value,
  onChange,
  options,
  placeholder = '',
  disabled,
  menuPlacement,
  isClearable = true,
  ...props
}: SelectProps) {
  const { isErrored } = props as RestProps

  return (
    <SelectContainer
      options={options}
      placeholder={placeholder}
      classNamePrefix="react-select"
      menuPlacement={menuPlacement}
      isDisabled={disabled}
      isClearable={isClearable}
      components={{
        ClearIndicator: ClearIndicatorCustom,
      }}
      value={value}
      onChange={(data) => onChange(data as OptionType)}
      menuPortalTarget={document.body}
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

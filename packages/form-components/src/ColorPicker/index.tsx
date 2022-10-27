import { Color, colors } from '@siakit/core'
import { Tooltip } from '@siakit/tooltip'

import { ColorButton, ColorItem, ColorPickerContainer } from './styles'

type ColorPickerProps = {
  value: Color | null
  onChange: (color: Color | null) => void
  disabled?: boolean
}

export function ColorPicker({ value, onChange, disabled }: ColorPickerProps) {
  function neutralColor(currentColor: Color): string {
    if (['sky', 'mint', 'lime', 'yellow', 'amber'].includes(currentColor)) {
      return '$black'
    }

    return '$white'
  }

  return (
    <ColorPickerContainer>
      {Object.keys(colors).map((color) => (
        <Tooltip key={color} content={colors[color as Color]}>
          <ColorButton
            type="button"
            isSelected={color === value}
            onClick={() => onChange(color as Color)}
            disabled={disabled}
          >
            <ColorItem
              css={{
                backgroundColor: `$${color}9`,
                color: neutralColor(color as Color),
              }}
            >
              {color === value && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-check"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </ColorItem>
          </ColorButton>
        </Tooltip>
      ))}
    </ColorPickerContainer>
  )
}

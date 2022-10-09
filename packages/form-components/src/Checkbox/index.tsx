import { StyledCheckbox, StyledThumb } from './styles'

type CheckboxProps = {
  value: boolean
  onChange?: (value: boolean) => void
}

function Checkbox({ value, onChange, ...props }: CheckboxProps) {
  return (
    <StyledCheckbox checked={value} onCheckedChange={onChange} {...props}>
      <StyledThumb />
    </StyledCheckbox>
  )
}

export { Checkbox }
export type { CheckboxProps }

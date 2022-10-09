import { StyledSwitch, StyledThumb } from './styles'

type SwitchProps = {
  value: boolean
  onChange?: (value: boolean) => void
}

function Switch({ value, onChange, ...props }: SwitchProps) {
  return (
    <StyledSwitch checked={value} onCheckedChange={onChange} {...props}>
      <StyledThumb />
    </StyledSwitch>
  )
}

export { Switch }
export type { SwitchProps }

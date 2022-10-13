import { SwitchContainer, SwitchThumb } from './styles'

type SwitchProps = {
  value: boolean
  onChange: (value: boolean) => void
  disabled?: boolean
}

type RestProps = {
  isErrored: boolean
}

export function Switch({ value, onChange, disabled, ...props }: SwitchProps) {
  const { isErrored } = props as RestProps

  return (
    <SwitchContainer
      checked={value}
      onCheckedChange={onChange}
      isErrored={isErrored}
      disabled={disabled}
      {...props}
    >
      <SwitchThumb />
    </SwitchContainer>
  )
}

import { AlertContainer } from './styles'

interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'danger'
  children: React.ReactNode
}

function Alert({ type, children, ...props }: AlertProps) {
  return (
    <AlertContainer type={type} {...props}>
      {children}
    </AlertContainer>
  )
}

export { Alert }
export type { AlertProps }

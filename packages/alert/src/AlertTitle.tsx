interface AlertTitleProps {
  children: string
}

function AlertTitle({ children, ...props }: AlertTitleProps) {
  return <strong {...props}>{children}</strong>
}

export { AlertTitle }
export type { AlertTitleProps }

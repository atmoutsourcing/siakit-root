interface AlertTextProps {
  children: string
}

function AlertText({ children, ...props }: AlertTextProps) {
  return <p {...props}>{children}</p>
}

export { AlertText }
export type { AlertTextProps }

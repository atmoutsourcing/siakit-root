import { toast as fireToast } from 'react-toastify'

type ToastProps = {
  title: string
  description?: string
  type?: 'info' | 'success' | 'warning' | 'error' | 'default'
}

export function toast({ title, description, type = 'default' }: ToastProps) {
  fireToast(
    <div>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>,
    {
      type,
    },
  )
}

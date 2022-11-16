import { useEffect, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

type ModalProps = Dialog.DialogProps

export function Modal({ children, open, ...props }: ModalProps) {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (open !== undefined) {
      setTimeout(() => {
        setModalOpen(open)
      }, 5)
    }
  }, [open])

  return (
    <Dialog.Root open={modalOpen} {...props}>
      {children}
    </Dialog.Root>
  )
}

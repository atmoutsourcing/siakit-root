import { createContext, ReactNode, useContext, useState } from 'react'

import { Dialog } from './Dialog'

type Type = 'info' | 'success' | 'warning' | 'danger'

type AddDialogData = {
  type: Type
  title: string
  description: string
  showCancel?: boolean
  onCancel?: () => void
  cancelText?: string
  onAction: () => void
  actionText: string
}

type DialogContextType = {
  addDialog: (data: AddDialogData) => void
}

type Dialog = {
  id: number
  type: Type
  title: string
  description: string
  showCancel?: boolean
  onCancel?: () => void
  cancelText?: string
  onAction: () => void
  actionText: string
}

const DialogContext = createContext({} as DialogContextType)

type DialogProviderProps = {
  children: ReactNode
}

function DialogProvider({ children }: DialogProviderProps) {
  const [dialogs, setDialogs] = useState<Dialog[]>([])

  function addDialog({
    type,
    title,
    description,
    showCancel = true,
    onCancel,
    cancelText,
    onAction,
    actionText,
  }: AddDialogData): void {
    const dialog = {
      id: Date.now(),
      type,
      title,
      description,
      showCancel,
      onCancel,
      cancelText,
      onAction,
      actionText,
    }

    setDialogs((prevState) => [...prevState, dialog])
  }

  function removeDialog(id: number) {
    setDialogs((prevState) => prevState.filter((dialog) => dialog.id !== id))
  }

  return (
    <DialogContext.Provider value={{ addDialog }}>
      {dialogs.map((dialog) => (
        <Dialog key={dialog.id} dialog={dialog} removeDialog={removeDialog} />
      ))}

      {children}
    </DialogContext.Provider>
  )
}

function useDialog() {
  const dialogContext = useContext(DialogContext)

  if (!dialogContext) {
    throw new Error('useDialog must be used within a DialogProvider.')
  }

  return dialogContext
}

export { DialogProvider, useDialog }

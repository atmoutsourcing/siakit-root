import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Button } from '@siakit/button'
import { Heading } from '@siakit/heading'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import { DangerIcon } from '../icons/DangerIcon'
import { InfoIcon } from '../icons/InfoIcon'
import { SuccessIcon } from '../icons/SuccessIcon'
import { WarningIcon } from '../icons/WarningIcon'
import { Content, Overlay } from './styles'

type Type = 'info' | 'success' | 'warning' | 'danger'

type DialogType = {
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

type DialogProps = {
  dialog: DialogType
  removeDialog: (id: number) => void
}

export function Dialog({ dialog, removeDialog }: DialogProps) {
  function handleCancel() {
    removeDialog(dialog.id)

    if (dialog.onCancel) {
      dialog.onCancel()
    }
  }

  function handleAction() {
    dialog.onAction()

    removeDialog(dialog.id)
  }

  return (
    <AlertDialog.Root defaultOpen>
      <AlertDialog.Portal>
        <Overlay>
          <Content>
            <Flex width={56} height={56} margin="8px 0 0">
              {dialog.type === 'info' && <InfoIcon />}
              {dialog.type === 'success' && <SuccessIcon />}
              {dialog.type === 'warning' && <WarningIcon />}
              {dialog.type === 'danger' && <DangerIcon />}
            </Flex>

            <Flex direction="column" gap={8} align="center" padding="8px 0">
              <AlertDialog.Title asChild>
                <Heading align="center">{dialog.title}</Heading>
              </AlertDialog.Title>
              <AlertDialog.Description asChild>
                <Text lowContrast align="center" size="md">
                  {dialog.description}
                </Text>
              </AlertDialog.Description>
            </Flex>

            <Flex gap={8} justify="center">
              {dialog.showCancel && (
                <AlertDialog.Cancel asChild onClick={handleCancel}>
                  <Button type="button" variant="secondary" colorScheme="gray">
                    {dialog.cancelText ?? 'Cancel'}
                  </Button>
                </AlertDialog.Cancel>
              )}
              <AlertDialog.Action asChild>
                <Button
                  type="button"
                  colorScheme={
                    dialog.type === 'info'
                      ? 'blue'
                      : dialog.type === 'success'
                      ? 'green'
                      : dialog.type === 'warning'
                      ? 'amber'
                      : 'red'
                  }
                  onClick={handleAction}
                >
                  {dialog.actionText}
                </Button>
              </AlertDialog.Action>
            </Flex>
          </Content>
        </Overlay>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

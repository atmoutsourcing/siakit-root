import { Button } from '@siakit/button'
import { useDialog } from '@siakit/dialog'
import { Flex } from '@siakit/layout'

export function DialogPage() {
  const { addDialog } = useDialog()

  return (
    <Flex gap={8} flex align="center" justify="center">
      <Button
        type="button"
        colorScheme="blue"
        onClick={() =>
          addDialog({
            type: 'info',
            title: 'Title Title Title Title Title',
            description: 'teste teste teste teste teste teste teste teste',
            onAction: () => console.log('action'),
            actionText: 'Ok',
          })
        }
      >
        info dialog
      </Button>
      <Button
        type="button"
        colorScheme="green"
        onClick={() =>
          addDialog({
            type: 'success',
            title: 'Title',
            description: 'teste teste teste teste teste teste teste teste',
            onAction: () => console.log('action'),
            actionText: 'Ok',
          })
        }
      >
        success dialog
      </Button>
      <Button
        type="button"
        colorScheme="amber"
        onClick={() =>
          addDialog({
            type: 'warning',
            title: 'Title',
            description: 'teste teste teste teste teste teste teste teste',
            onAction: () => console.log('action'),
            actionText: 'Ok',
          })
        }
      >
        warning dialog
      </Button>
      <Button
        type="button"
        colorScheme="red"
        onClick={() =>
          addDialog({
            type: 'danger',
            title: 'Title',
            description: 'teste teste teste teste teste teste teste teste',
            onAction: () => console.log('action'),
            actionText: 'Ok',
          })
        }
      >
        danger dialog
      </Button>
    </Flex>
  )
}

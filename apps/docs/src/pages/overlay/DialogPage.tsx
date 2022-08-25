import { Button } from '@siakit/button'
import { useDialog } from '@siakit/dialog'
import { Flex } from '@siakit/layout'

export function DialogPage() {
  const { addDialog } = useDialog()

  async function handleAction() {
    console.log('handle action')
  }

  return (
    <Flex>
      <Button
        type="button"
        colorScheme="indigo"
        onClick={() =>
          addDialog({
            type: 'danger',
            title: 'Alert dialog title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            onAction: () => handleAction(),
            actionText: 'action',
          })
        }
      >
        info dialog
      </Button>
    </Flex>
  )
}

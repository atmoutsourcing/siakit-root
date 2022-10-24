import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { useToast } from '@siakit/toast'

export function ToastPage() {
  const { addToast } = useToast()

  return (
    <Flex flex align="center" justify="center" gap={8}>
      <Button
        type="button"
        colorScheme="blue"
        onClick={() =>
          addToast({
            type: 'info',
            title: 'teste',
            description:
              'toast toast toast toast toast toast toast toast toast toast toast',
          })
        }
      >
        info toast
      </Button>
      <Button
        type="button"
        colorScheme="green"
        onClick={() =>
          addToast({
            type: 'success',
            title: 'teste',
            description:
              'toast toast toast toast toast toast toast toast toast toast toast',
            actions: [
              {
                text: 'Action 1',
                onClick: () => console.log('action 1'),
              },
            ],
          })
        }
      >
        success toast
      </Button>
      <Button
        type="button"
        colorScheme="amber"
        onClick={() =>
          addToast({
            type: 'warning',
            title: 'teste',
            description:
              'toast toast toast toast toast toast toast toast toast toast toast',
          })
        }
      >
        warning toast
      </Button>
      <Button
        type="button"
        colorScheme="red"
        onClick={() =>
          addToast({
            type: 'danger',
            title: 'teste',
            description:
              'toast toast toast toast toast toast toast toast toast toast toast',
          })
        }
      >
        danger toast
      </Button>

      <Button
        type="button"
        onClick={() =>
          addToast({
            urgent: true,
            title: 'teste',
            description:
              'toast toast toast toast toast toast toast toast toast toast toast',
            actions: [
              { text: 'action 1', onClick: () => console.log('action 1') },
              { text: 'action 2', onClick: () => console.log('action 2') },
              { text: 'action 3', onClick: () => console.log('action 3') },
            ],
          })
        }
      >
        urgent toast
      </Button>
    </Flex>
  )
}

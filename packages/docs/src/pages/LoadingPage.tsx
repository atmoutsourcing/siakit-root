import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { useLoading } from '@siakit/loading'

export function LoadingPage() {
  const { setLoading } = useLoading()

  function showLoading() {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  return (
    <Flex flex align="center" justify="center">
      <Button type="button" onClick={showLoading}>
        show loading
      </Button>
    </Flex>
  )
}

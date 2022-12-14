import { useEffect } from 'react'
import Lottie from 'react-lottie'

import { Button } from '@siakit/button'
import { useTheme } from '@siakit/core'
import { Heading } from '@siakit/heading'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import emptyDarkAnimationData from './assets/empty_dark.json'
import emptyAnimationData from './assets/empty.json'

type EmptyProps = {
  title: string
  description?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  buttonText?: string
}

function Empty({
  title,
  description,
  onClick,
  buttonText,
  ...props
}: EmptyProps): JSX.Element {
  const { theme } = useTheme()

  useEffect(() => {
    const lottieDiv = document.querySelector<HTMLElement>(`div[title=empty]`)

    if (lottieDiv) {
      lottieDiv.tabIndex = -1
    }
  }, [])

  return (
    <Flex
      flex
      direction="column"
      justify="center"
      align="center"
      gap={32}
      padding="0 32px 32px"
      {...props}
    >
      {theme === 'light' ? (
        <Lottie
          height={176}
          width={176}
          options={{
            autoplay: true,
            loop: false,
            animationData: emptyAnimationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          isPaused={false}
          isStopped={false}
          title="empty"
        />
      ) : (
        <Lottie
          height={176}
          width={176}
          options={{
            autoplay: true,
            loop: false,
            animationData: emptyDarkAnimationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          isPaused={false}
          isStopped={false}
          title="empty"
        />
      )}

      <Flex direction="column" gap={8} align="center">
        <Heading size="sm">{title}</Heading>

        {!!description && (
          <Text size="sm" lowContrast>
            {description}
          </Text>
        )}
      </Flex>

      {!!onClick && !!buttonText && (
        <Button type="button" onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </Flex>
  )
}

export { Empty }
export type { EmptyProps }

import { createContext, ReactNode, useContext, useState } from 'react'

import * as RadixToast from '@radix-ui/react-toast'
import { Badge } from '@siakit/badge'
import { Button } from '@siakit/button'
import { useTheme, themeKeys } from '@siakit/core'
import { Heading } from '@siakit/heading'
import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import { StyledToast, StyledViewport } from './styles'

type Toast = {
  id: string
  type?: 'info' | 'success' | 'warning' | 'danger'
  duration?: number
  urgent?: boolean
  title: string
  description?: string
  actions?: { text: string; onClick: () => void }[]
}

type AddToastData = Omit<Toast, 'id'>

type ToastContextData = {
  addToast: (data: AddToastData) => void
}

const ToastContext = createContext({} as ToastContextData)

type ToastProviderProps = {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const { theme } = useTheme()

  const [toasts, setToasts] = useState<Toast[]>([])

  function addToast({
    type = 'info',
    duration = 5000,
    urgent,
    title,
    description,
    actions,
  }: AddToastData) {
    const toast = {
      id: String(Date.now()),
      type,
      duration: urgent ? 1000 * 60 * 60 * 24 : duration,
      urgent,
      title,
      description,
      actions,
    }

    setToasts((prevState) => [...prevState, toast])
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <RadixToast.Provider>
        {toasts.map((toast) => (
          <StyledToast
            key={toast.id}
            css={
              theme === 'dark'
                ? {
                    backgroundColor: '$gray4',
                    borderColor: '$gray5',
                  }
                : {}
            }
            duration={toast.duration}
            onPause={undefined}
            onResume={undefined}
          >
            <Flex flex justify="between">
              <RadixToast.Title asChild>
                <Flex padding={4} align="center" gap={8}>
                  {toast.urgent ? (
                    <Badge color="red">URGENTE</Badge>
                  ) : (
                    <>
                      {toast.type === 'info' && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill={themeKeys.colors.blue9.value}
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-2,48a12,12,0,1,1-12,12A12,12,0,0,1,126,72Zm10,112h-8a8,8,0,0,1-8-8V128a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8v48a8,8,0,0,1,0,16Z"></path>
                        </svg>
                      )}
                      {toast.type === 'success' && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill={themeKeys.colors.green9.value}
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"></path>
                        </svg>
                      )}
                      {toast.type === 'warning' && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill={themeKeys.colors.amber9.value}
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <path d="M236.7,188,148.8,36a24,24,0,0,0-41.6,0h0L19.3,188A23.9,23.9,0,0,0,40,224H216a23.9,23.9,0,0,0,20.7-36ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"></path>
                        </svg>
                      )}
                      {toast.type === 'danger' && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill={themeKeys.colors.red9.value}
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <path d="M227.3,80.2,175.8,28.7A16.1,16.1,0,0,0,164.5,24h-73a16.1,16.1,0,0,0-11.3,4.7L28.7,80.2A16.1,16.1,0,0,0,24,91.5v73a16.1,16.1,0,0,0,4.7,11.3l51.5,51.5A16.1,16.1,0,0,0,91.5,232h73a16.1,16.1,0,0,0,11.3-4.7l51.5-51.5a16.1,16.1,0,0,0,4.7-11.3v-73A16.1,16.1,0,0,0,227.3,80.2ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"></path>
                        </svg>
                      )}
                    </>
                  )}
                  <Heading size="xs" weight="medium">
                    {toast.title}
                  </Heading>
                </Flex>
              </RadixToast.Title>

              <RadixToast.Close asChild>
                <IconButton
                  type="button"
                  variant="ghost"
                  colorScheme="gray"
                  size="sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </IconButton>
              </RadixToast.Close>
            </Flex>

            {toast.description && (
              <RadixToast.Description asChild>
                <Flex padding="0 4px 4px">
                  <Text lowContrast css={{ lineHeight: '$short' }}>
                    {toast.description}
                  </Text>
                </Flex>
              </RadixToast.Description>
            )}

            {toast.actions && (
              <Flex justify="end" gap={4} padding="0 4px 4px">
                {toast.actions.map((action) => (
                  <Button
                    key={action.text}
                    type="button"
                    size="sm"
                    onClick={action.onClick}
                    variant="secondary"
                    colorScheme="gray"
                  >
                    {action.text}
                  </Button>
                ))}
              </Flex>
            )}
          </StyledToast>
        ))}

        <StyledViewport />
      </RadixToast.Provider>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const toastContext = useContext(ToastContext)

  if (!toastContext) {
    throw new Error('useToast must be used within a ToastProvider.')
  }

  return toastContext
}

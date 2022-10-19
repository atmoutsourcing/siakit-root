import { createContext, ReactNode, useContext, useState } from 'react'

import { Spinner } from '@siakit/spinner'

import { Overlay } from './styles'

type LoadingContextData = {
  setLoading: (value: boolean) => void
  clearLoading: () => void
}

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
)

type LoadingProviderProps = {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [refs, setRefs] = useState(0)

  function setLoading(value: boolean): void {
    if (value) {
      setRefs((prevState) => prevState + 1)
    } else {
      setRefs((prevState) => (prevState <= 0 ? 0 : prevState - 1))
    }
  }

  function clearLoading(): void {
    setRefs(0)
  }

  return (
    <LoadingContext.Provider value={{ setLoading, clearLoading }}>
      {refs > 0 && (
        <Overlay>
          <Spinner inverted />
        </Overlay>
      )}

      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const loadingContext = useContext(LoadingContext)

  if (!loadingContext) {
    throw new Error('useLoading must be used within a LoadingProvider.')
  }

  return loadingContext
}

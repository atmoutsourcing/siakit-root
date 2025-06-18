import { BrowserRouter } from 'react-router-dom'

import { Provider } from '@siakit/core'
import { LoadingProvider } from '@siakit/loading'

import { AppRoutes } from './Routes/AppRoutes'

export function App() {
  return (
    <Provider>
      <BrowserRouter>
        <LoadingProvider>
          <AppRoutes />
        </LoadingProvider>
      </BrowserRouter>
    </Provider>
  )
}

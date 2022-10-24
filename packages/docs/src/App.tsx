import { BrowserRouter } from 'react-router-dom'

import { Provider } from '@siakit/core'
import { LoadingProvider } from '@siakit/loading'
import { ToastProvider } from '@siakit/toast'

import { DefaultLayout } from './pages/_layouts/Default'
import { AppRoutes } from './Routes/AppRoutes'

export function App() {
  return (
    <Provider>
      <ToastProvider>
        <LoadingProvider>
          <DefaultLayout>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </DefaultLayout>
        </LoadingProvider>
      </ToastProvider>
    </Provider>
  )
}

import { BrowserRouter } from 'react-router-dom'
import { Provider } from '@siakit/core'
import { DefaultLayout } from './pages/_layouts/Default'
import { AppRoutes } from './Routes/AppRoutes'

export function App() {
  return (
    <Provider>
      <DefaultLayout>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </DefaultLayout>
    </Provider>
  )
}

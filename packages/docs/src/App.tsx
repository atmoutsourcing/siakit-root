import { BrowserRouter } from 'react-router-dom'

import { Provider } from '@siakit/core'

import { AppRoutes } from './routes/AppRoutes'

export function App() {
  return (
    <Provider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

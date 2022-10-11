import { Provider } from '@siakit/core'
import { DefaultLayout } from './pages/_layouts/Default'

import { Test } from './Test'

export function App() {
  return (
    <Provider>
      <DefaultLayout>
        <Test />
      </DefaultLayout>
    </Provider>
  )
}

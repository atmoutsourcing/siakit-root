import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from '@siakit/core'
import { DialogProvider } from '@siakit/dialog'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <DialogProvider>
        <App />
      </DialogProvider>
    </Provider>
  </React.StrictMode>,
)

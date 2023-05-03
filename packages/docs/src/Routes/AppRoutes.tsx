import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../pages/_layouts/Default'
import { Home } from '../pages/Home'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

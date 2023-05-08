import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../pages/_layouts/Default'
import { Home } from '../pages/Home'
import { PageHeader } from '../pages/PageHeader'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page-header" element={<PageHeader />} />
      </Route>
    </Routes>
  )
}

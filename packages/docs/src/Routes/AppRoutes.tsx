import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../pages/_layouts/Default'
import { FormComponents } from '../pages/FormComponents'
import { FormUnform } from '../pages/FormUnform'
import { Home } from '../pages/Home'
import { PageHeader } from '../pages/PageHeader'
import { ProgressBar } from '../pages/ProgressBar'
import { Sidebar } from '../pages/Sidebar'
import { Tabs } from '../pages/Tabs'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/page-header" element={<PageHeader />} />
        <Route path="/form-unform" element={<FormUnform />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/progress-bar" element={<ProgressBar />} />
        <Route path="/form-components" element={<FormComponents />} />
        <Route path="/tabs" element={<Tabs />} />
      </Route>
    </Routes>
  )
}

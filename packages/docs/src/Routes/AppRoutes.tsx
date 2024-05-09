import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../pages/_layouts/Default'
import { DropdownComponent } from '../pages/Dropdown'
import { FormComponents } from '../pages/FormComponents'
import { FormUnform } from '../pages/FormUnform'
import { Home } from '../pages/Home'
import { PageHeader } from '../pages/PageHeader'
import { ProgressBar } from '../pages/ProgressBar'
import { ReactHookForm } from '../pages/ReactHookForm'
import { Sidebar } from '../pages/Sidebar'
import { Table } from '../pages/Table'
import { Tabs } from '../pages/Tabs'
import { Test } from '../pages/test'
import { Text } from '../pages/Text'
import { Tooltip } from '../pages/Tooltip'

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
        <Route path="/table" element={<Table />} />
        <Route path="/text" element={<Text />} />
        <Route path="/react-hook-form" element={<ReactHookForm />} />
        <Route path="/tooltip" element={<Tooltip />} />
        <Route path="/dropdown" element={<DropdownComponent />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  )
}

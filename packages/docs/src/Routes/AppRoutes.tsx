import { Routes, Route } from 'react-router-dom'

import { AvatarPage } from '../pages/AvatarPage'
import { FormPage } from '../pages/FormPage'
import { FormUnform } from '../pages/FormUnform'
import { PaginationPage } from '../pages/PaginationPage'
import { TablePage } from '../pages/TablePage'
import { Test } from '../Test'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/form">
        <Route path="" element={<FormPage />} />
        <Route path="unform" element={<FormUnform />} />
      </Route>
      <Route path="table" element={<TablePage />} />
      <Route path="pagination" element={<PaginationPage />} />
      <Route path="avatar" element={<AvatarPage />} />
    </Routes>
  )
}

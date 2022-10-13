import { Routes, Route } from 'react-router-dom'
import { FormPage } from '../pages/FormPage'
import { FormUnform } from '../pages/FormUnform'
import { Test } from '../Test'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/form">
        <Route path="" element={<FormPage />} />
        <Route path="unform" element={<FormUnform />} />
      </Route>
    </Routes>
  )
}

import { Routes, Route } from 'react-router-dom'
import { FormPage } from '../pages/FormPage'
import { Test } from '../Test'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  )
}

import { Routes, Route } from 'react-router-dom'

import { AvatarPage } from '../pages/AvatarPage'
import { BadgePage } from '../pages/BadgePage'
import { ButtonPage } from '../pages/ButtonPage'
import { CardPage } from '../pages/CardPage'
import { DialogPage } from '../pages/DialogPage'
import { DrawerPage } from '../pages/DrawerPage'
import { DropdownPage } from '../pages/DropdownPage'
import { EmptyPage } from '../pages/EmptyPage'
import { FormPage } from '../pages/FormPage'
import { FormUnform } from '../pages/FormUnform'
import { LoadingPage } from '../pages/LoadingPage'
import { MapsPage } from '../pages/MapsPage'
import { ModalPage } from '../pages/ModalPage'
import { PaginationPage } from '../pages/PaginationPage'
import { SidebarPage } from '../pages/SidebarPage'
import { TablePage } from '../pages/TablePage'
import { TabsPage } from '../pages/TabsPage'
import { TestPage } from '../pages/TestPage'
import { TextPage } from '../pages/TextPage'
import { TimelinePage } from '../pages/TimelinePage'
import { ToastPage } from '../pages/ToastPage'
import { TooltipPage } from '../pages/TooltipPage'
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
      <Route path="test" element={<TestPage />} />
      <Route path="loading" element={<LoadingPage />} />
      <Route path="modal" element={<ModalPage />} />
      <Route path="drawer" element={<DrawerPage />} />
      <Route path="card" element={<CardPage />} />
      <Route path="timeline" element={<TimelinePage />} />
      <Route path="toast" element={<ToastPage />} />
      <Route path="badge" element={<BadgePage />} />
      <Route path="tabs" element={<TabsPage />} />
      <Route path="dialog" element={<DialogPage />} />
      <Route path="text" element={<TextPage />} />
      <Route path="empty" element={<EmptyPage />} />
      <Route path="dropdown" element={<DropdownPage />} />
      <Route path="button" element={<ButtonPage />} />
      <Route path="sidebar" element={<SidebarPage />} />
      <Route path="tooltip" element={<TooltipPage />} />
      <Route path="maps" element={<MapsPage />} />
    </Routes>
  )
}

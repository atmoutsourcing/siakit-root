import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './pages/_layouts/DefaultLayout'
import { ButtonPage } from './pages/action/ButtonPage'
import { IconButtonPage } from './pages/action/IconButton'
import { LinkButtonPage } from './pages/action/LinkButton'
import { BadgePage } from './pages/datadisplay/BadgePage'
import { ListPage } from './pages/datadisplay/ListPage'
import { PageHeaderPage } from './pages/datadisplay/PageHeaderPage'
import { SeparatorPage } from './pages/datadisplay/SeparatorPage'
import { AccordionPage } from './pages/disclosure/AccordionPage'
import { AlertPage } from './pages/feedback/AlertPage'
import { ProgressBarPage } from './pages/feedback/ProgressBarPage'
import { ShimmerPage } from './pages/feedback/ShimmerPage'
import { SpinnerPage } from './pages/feedback/SpinnerPage'
import { GettingStarted } from './pages/GettingStarted'
import { CardPage } from './pages/layout/CardPage'
import { FlexPage } from './pages/layout/FlexPage'
import { GridPage } from './pages/layout/GridPage'
import { SpacerPage } from './pages/layout/SpacerPage'
import { AvatarPage } from './pages/media/AvatarPage'
import { ImagePage } from './pages/media/ImagePage'
import { DialogPage } from './pages/overlay/DialogPage'
import { DropdownPage } from './pages/overlay/DropdownPage'
import { HoverCardPage } from './pages/overlay/HoverCardPage'
import { ModalPage } from './pages/overlay/ModalPage'
import { PopoverPage } from './pages/overlay/Popover'
import { TooltipPage } from './pages/overlay/TooltipPage'
import { HeadingPage } from './pages/typography/HeadingPage'
import { TextPage } from './pages/typography/TextPage'
import { AvatarGroupPage } from './pages/utils/AvatarGroupPage'
import { EmptyPage } from './pages/utils/EmptyPage'
import { FooterPage } from './pages/utils/FooterPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="" element={<GettingStarted />} />

        <Route path="/typography">
          <Route path="heading" element={<HeadingPage />} />
          <Route path="text" element={<TextPage />} />
        </Route>

        <Route path="/action">
          <Route path="button" element={<ButtonPage />} />
          <Route path="icon-button" element={<IconButtonPage />} />
          <Route path="link-button" element={<LinkButtonPage />} />
        </Route>

        <Route path="/feedback">
          <Route path="alert" element={<AlertPage />} />
          <Route path="spinner" element={<SpinnerPage />} />
          <Route path="progress-bar" element={<ProgressBarPage />} />
          <Route path="shimmer" element={<ShimmerPage />} />
        </Route>

        <Route path="/data-display">
          <Route path="badge" element={<BadgePage />} />
          <Route path="list" element={<ListPage />} />
          <Route path="page-header" element={<PageHeaderPage />} />
          <Route path="separator" element={<SeparatorPage />} />
        </Route>

        <Route path="/overlay">
          <Route path="dropdown" element={<DropdownPage />} />
          <Route path="tooltip" element={<TooltipPage />} />
          <Route path="hover-card" element={<HoverCardPage />} />
          <Route path="popover" element={<PopoverPage />} />
          <Route path="modal" element={<ModalPage />} />
          <Route path="dialog" element={<DialogPage />} />
        </Route>

        <Route path="/disclosure">
          <Route path="accordion" element={<AccordionPage />} />
        </Route>

        <Route path="/media">
          <Route path="avatar" element={<AvatarPage />} />
          <Route path="image" element={<ImagePage />} />
        </Route>

        <Route path="/layout">
          <Route path="flex" element={<FlexPage />} />
          <Route path="grid" element={<GridPage />} />
          <Route path="card" element={<CardPage />} />
          <Route path="spacer" element={<SpacerPage />} />
        </Route>

        <Route path="/utils">
          <Route path="empty" element={<EmptyPage />} />
          <Route path="footer" element={<FooterPage />} />
          <Route path="avatar-group" element={<AvatarGroupPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

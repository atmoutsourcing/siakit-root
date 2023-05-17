import { Link } from 'react-router-dom'

import { Flex } from '@siakit/layout'

export function Sidebar() {
  return (
    <Flex width={320} direction="column" padding gap={8} overflow>
      <Link to="/accordion">accordion</Link>
      <Link to="/alert">alert</Link>
      <Link to="/avatar">avatar</Link>
      <Link to="/avatar-group">avatar-group</Link>
      <Link to="/badge">badge</Link>
      <Link to="/button">button</Link>
      <Link to="/card">card</Link>
      <Link to="/core">core</Link>
      <Link to="/dialog">dialog</Link>
      <Link to="/drawer">drawer</Link>
      <Link to="/dropdown">dropdown</Link>
      <Link to="/empty">empty</Link>
      <Link to="/eslint-config">eslint-config</Link>
      <Link to="/footer">footer</Link>
      <Link to="/form-components">form-components</Link>
      <Link to="/form-unform">form-unform</Link>
      <Link to="/heading">heading</Link>
      <Link to="/hover-card">hover-card</Link>
      <Link to="/icon-button">icon-button</Link>
      <Link to="/image">image</Link>
      <Link to="/layout">layout</Link>
      <Link to="/link-button">link-button</Link>
      <Link to="/list">list</Link>
      <Link to="/loading">loading</Link>
      <Link to="/mask">mask</Link>
      <Link to="/modal">modal</Link>
      <Link to="/page-header">page-header</Link>
      <Link to="/pagination">pagination</Link>
      <Link to="/popover">popover</Link>
      <Link to="/progress-bar">progress-bar</Link>
      <Link to="/react-hook-form">react-hook-form</Link>
      <Link to="/separator">separator</Link>
      <Link to="/shimmer">shimmer</Link>
      <Link to="/sidebar">sidebar</Link>
      <Link to="/spacer">spacer</Link>
      <Link to="/spinner">spinner</Link>
      <Link to="/table">table</Link>
      <Link to="/tabs">tabs</Link>
      <Link to="/text">text</Link>
      <Link to="/timeline">timeline</Link>
      <Link to="/toast">toast</Link>
      <Link to="/tooltip">tooltip</Link>
    </Flex>
  )
}

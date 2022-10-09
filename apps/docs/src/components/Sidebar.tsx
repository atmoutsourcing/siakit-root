import { Link } from 'react-router-dom'

import { Heading } from '@siakit/heading'
import { Flex } from '@siakit/layout'

export function Sidebar() {
  return (
    <Flex direction="column" gap overflow>
      <Flex direction="column">
        <Link to="/">Getting started</Link>
      </Flex>

      <Flex direction="column">
        <Heading size="md">Typography</Heading>

        <Flex direction="column" padding="0 0 0 16px">
          <Link to="/typography/heading">heading</Link>
          <Link to="/typography/text">text</Link>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Heading size="md">Action</Heading>

        <Flex direction="column" padding="0 0 0 16px">
          <Link to="/action/button">button</Link>
          <Link to="/action/icon-button">icon button</Link>
          <Link to="/action/link-button">link button</Link>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Heading size="md">Form</Heading>

        <Flex direction="column" padding="0 0 0 16px">
          <Link to="/form/input">input</Link>
          <Link to="/form/select">select</Link>
          <Link to="/form/select-multi">select-multi</Link>
          <Link to="/form/number-input">number-input</Link>
          <Link to="/form/money-input">money-input</Link>
          <Link to="/form/switch">switch</Link>
          <Link to="/form/date-picker">date-picker</Link>
          <Link to="/form/percentage-input">percentage-input</Link>
          <Link to="/form/textarea">textarea</Link>
          <Link to="/form/language-picker">language-picker</Link>
          <Link to="/form/password-input">password-input</Link>
          <Link to="/form/phone-input">phone-input</Link>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Heading size="md">Feedback</Heading>

        <Flex direction="column" padding="0 0 0 16px">
          <Link to="/feedback/alert">alert</Link>
          <Link to="/feedback/spinner">spinner</Link>
          <Link to="/feedback/progress-bar">progress-bar</Link>
          <Link to="/feedback/shimmer">shimmer</Link>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Heading size="md">Data display</Heading>

        <Flex direction="column" padding="0 0 0 16px">
          <Link to="/data-display/badge">badge</Link>
          <Link to="/data-display/list">list</Link>
          <Link to="/data-display/page-header">page-header</Link>
          <Link to="/data-display/separator">separator</Link>
          <Link to="/data-display/table">table</Link>
          <Link to="/data-display/pagination">pagination</Link>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Heading size="md">Overlay</Heading>

        <Flex direction="column" padding="0 0 0 16px">
          <Link to="/overlay/dropdown">dropdown</Link>
          <Link to="/overlay/tooltip">tooltip</Link>
          <Link to="/overlay/hover-card">hover-card</Link>
          <Link to="/overlay/popover">popover</Link>
          <Link to="/overlay/modal">modal</Link>
          <Link to="/overlay/dialog">dialog</Link>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Heading size="md">Disclosure</Heading>

        <Flex direction="column" padding="0 0 0 16px">
          <Link to="/disclosure/accordion">accordion</Link>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Heading size="md">Media</Heading>

        <Flex direction="column" padding="0 0 0 16px">
          <Link to="/media/avatar">avatar</Link>
          <Link to="/media/image">image</Link>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Heading size="md">Layout</Heading>

        <Flex direction="column" padding="0 0 0 16px">
          <Link to="/layout/flex">flex</Link>
          <Link to="/layout/grid">grid</Link>
          <Link to="/layout/card">card</Link>
          <Link to="/layout/spacer">spacer</Link>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Heading size="md">Utils</Heading>

        <Flex direction="column" padding="0 0 0 16px">
          <Link to="/utils/empty">empty</Link>
          <Link to="/utils/footer">footer</Link>
          <Link to="/utils/avatar-group">avatar-group</Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

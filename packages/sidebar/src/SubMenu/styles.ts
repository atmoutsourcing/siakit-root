import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { styled } from '@siakit/core'

const SCROLLBAR_SIZE = 10

export const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  overflow: 'hidden',

  flex: 1,
})

export const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  backgroundColor: '$shape',
  borderRight: '1px solid $gray4',
})

export const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,
  transition: 'background 160ms ease-out',

  '&:hover': {
    background: '$gray3',
  },
  '&[data-orientation="vertical"]': {
    width: SCROLLBAR_SIZE,
  },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
})

export const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$gray7',
  borderRadius: SCROLLBAR_SIZE,
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
})

export const SubMenuContainer = styled('div', {
  flex: 1,
  overflow: 'auto',

  outline: '1px solid $gray4',
  zIndex: 1,
})

import { styled } from '@siakit/core'

export const FlexContainer = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    overflow: {
      true: {
        overflow: 'auto',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'flex-between',
      },
      around: {
        justifyContent: 'flex-around',
      },
      evenly: {
        justifyContent: 'flex-evenly',
      },
      stretch: {
        justifyContent: 'stretch',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
      center: {
        alignItems: 'center',
      },
      between: {
        alignItems: 'flex-between',
      },
      around: {
        alignItems: 'flex-around',
      },
      evenly: {
        alignItems: 'flex-evenly',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    flexWrap: {
      wrap: {
        flexWrap: 'wrap',
      },
    },
  },
})

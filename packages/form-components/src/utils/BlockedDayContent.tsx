import { createContext, useContext } from 'react'
import { DayContent, DayContentProps } from 'react-day-picker'

import { Tooltip } from '@siakit/tooltip'

import { BlockOptionsType, getBlockReason } from './date'

export const BlockOptionsContext = createContext<BlockOptionsType>({})

export function BlockedDayContent(props: DayContentProps) {
  const options = useContext(BlockOptionsContext)
  const reason = getBlockReason(props.date, options)

  if (!reason) return <DayContent {...props} />
 
  return (
    <Tooltip content={reason}>
      <span
        style={{
          display: 'grid',
          placeItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <DayContent {...props} />
      </span>
    </Tooltip>
  )
}

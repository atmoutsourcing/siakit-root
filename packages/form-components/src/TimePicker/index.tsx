import { ChangeEvent, useEffect, useState } from 'react'

import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'
import { toMask } from '@siakit/mask'
import { Popover, PopoverTrigger } from '@siakit/popover'
import { Text } from '@siakit/text'

import {
  Input,
  Suffix,
  TimePickerContainer,
  CustomPopoverContent,
  Item,
} from './styles'

type TimePickerProps = {
  value: number[]
  onChange: (value: number[]) => void
  placeholder?: string
  disabled?: boolean
}

type RestProps = {
  isErrored: boolean
}

export function TimePicker({
  value,
  onChange,
  placeholder,
  disabled,
  ...props
}: TimePickerProps) {
  const { isErrored } = props as RestProps

  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue(
      `${String(value[0]).padStart(2, '0')}:${String(value[1]).padStart(
        2,
        '0',
      )}`,
    )
  }, [value])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const targetValue = event.target.value

    const newValue = toMask({
      value: targetValue,
      mask: 'hour',
    })

    const splittedValue = newValue.split(':')

    onChange(splittedValue.map((item) => Number(item)))

    setInputValue(newValue)
  }

  function handleSelectHour(hour: number) {
    let newValue = []

    if (value[1]) {
      newValue = [hour, value[1]]
    } else {
      newValue = [hour, 0]
    }

    onChange(newValue)
  }

  function handleSelectMinute(minute: number) {
    let newValue = []

    if (value[0]) {
      newValue = [value[0], minute]
    } else {
      newValue = [0, minute]
    }

    onChange(newValue)
  }

  function handleClear() {
    setInputValue('')
    onChange([])
  }

  return (
    <TimePickerContainer isErrored={isErrored} disabled={disabled}>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />

      <Suffix css={{ visibility: inputValue ? 'visible' : 'hidden' }}>
        <IconButton
          type="button"
          size="sm"
          variant="ghost"
          colorScheme="gray"
          tabIndex={-1}
          onClick={handleClear}
          disabled={disabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </Suffix>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <IconButton
            type="button"
            size="sm"
            variant="ghost"
            colorScheme="gray"
            tabIndex={-1}
            disabled={disabled}
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </PopoverTrigger>

        <CustomPopoverContent align="end">
          <Flex maxHeight={320} overflow>
            <Flex direction="column" overflow>
              {new Array(24)
                .fill('')
                .map((_, index) => String(index).padStart(2, '0'))
                .map((item) => (
                  <Item
                    key={String(item)}
                    onClick={() => handleSelectHour(Number(item))}
                    isSelected={Number(item) === value[0]}
                  >
                    <Text size="sm">{item}</Text>
                  </Item>
                ))}
            </Flex>

            <Flex direction="column" overflow>
              {new Array(60)
                .fill('')
                .map((_, index) => String(index).padStart(2, '0'))
                .map((item) => (
                  <Item
                    key={String(item)}
                    onClick={() => handleSelectMinute(Number(item))}
                    isSelected={Number(item) === value[1]}
                  >
                    <Text size="sm">{item}</Text>
                  </Item>
                ))}
            </Flex>
          </Flex>
        </CustomPopoverContent>
      </Popover>
    </TimePickerContainer>
  )
}

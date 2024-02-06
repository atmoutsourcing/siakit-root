import { useEffect, useRef } from 'react'

import {
  EditorHandles,
  FormControl,
  FormLabel,
  RichTextInput as RichTextInputComponent,
} from '@siakit/form-components'
import { Flex } from '@siakit/layout'
import { useField } from '@unform/core'

import { InfoIcon } from './components/InfoIcon'

type RichTextInputProps = {
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean
  removeOptions?: string[]
  onChange?: (text: string) => void
  flex?: boolean
  explanation?: string
}

export function RichTextInput({
  name,
  label,
  placeholder,
  disabled,
  removeOptions,
  onChange,
  flex,
  explanation,
}: RichTextInputProps) {
  const editorRef = useRef<EditorHandles>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: editorRef,
      getValue: (ref) => {
        return ref.current?.getContent()
      },
      setValue: (ref, value) => {
        ref.current?.setContent(value)
      },
      clearValue: (ref) => {
        ref.current?.setContent('')
      },
    })
  }, [fieldName, registerField])

  return (
    <FormControl error={error} flex={flex}>
      <>
        {(label || explanation) && (
          <Flex align="center" gap={4} css={{ fill: '$gray9' }}>
            <FormLabel isErrored={!!error}>{label}</FormLabel>

            {explanation && <InfoIcon explanation={explanation} />}
          </Flex>
        )}
      </>

      <RichTextInputComponent
        ref={editorRef}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        removeOptions={removeOptions}
        onChange={onChange}
        flex={flex}
      />
    </FormControl>
  )
}

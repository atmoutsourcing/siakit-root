import { useEffect, useRef } from 'react'

import {
  EditorHandles,
  FormControl,
  FormLabel,
  RichTextInput as RichTextInputComponent,
} from '@siakit/form-components'
import { useField } from '@unform/core'

type RichTextInputProps = {
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean
}

export function RichTextInput({
  name,
  label,
  placeholder,
  disabled,
}: RichTextInputProps) {
  const editorRef = useRef<EditorHandles>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: editorRef,
      getValue: (ref) => {
        return ref.current.getContent()
      },
      setValue: (ref, value) => {
        ref.current.setContent(value)
      },
      clearValue: (ref) => {
        ref.current.setContent('')
      },
    })
  }, [fieldName, registerField])

  return (
    <FormControl error={error}>
      <>{!!label && <FormLabel isErrored={!!error}>{label}</FormLabel>}</>

      <RichTextInputComponent
        ref={editorRef}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </FormControl>
  )
}

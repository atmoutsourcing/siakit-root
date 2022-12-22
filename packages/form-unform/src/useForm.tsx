import { RefObject, useRef } from 'react'

import * as yup from 'yup'
import { OptionalObjectSchema } from 'yup/lib/object'

import { FormHandles } from '@unform/core'

import { getValidationErrors } from './getValidationErrors'

type HandleSubmitData<T> = (data: T) => void

type UseFormProps = {
  formSchema: OptionalObjectSchema<any>
}

type UseFormResponse<T> = {
  formRef: RefObject<FormHandles>
  handleSubmit: (handle: HandleSubmitData<T>) => void
}

export function useForm<T>({ formSchema }: UseFormProps): UseFormResponse<T> {
  const formRef = useRef<FormHandles>(null)

  async function handleSubmit(handle: HandleSubmitData<T>) {
    try {
      formRef.current?.setErrors({})

      const data = formRef.current?.getData() as T

      await formSchema.validate(data, {
        abortEarly: false,
      })

      handle(data)
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(err))
      }
    }
  }

  return { formRef, handleSubmit }
}

import {
  DragEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'

import { v4 as uuid } from 'uuid'

import { Card } from '@siakit/card'
import { FormControl } from '@siakit/form-components'
import { Heading } from '@siakit/heading'
import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'
import { useField } from '@unform/core'

import { Content, FileInputContainer } from './styles'

type FileInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  name: string
  multiple?: boolean
  disabled?: boolean
}

function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
}

export function FileInput({
  name,
  multiple = false,
  disabled,
  accept,
}: FileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, registerField, error } = useField(name)

  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<{ id: string; file: File }[]>([])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: () => {
        if (files.length) {
          return files.map((item) => item.file)
        }
      },
    })
  }, [fieldName, registerField, multiple, files])

  function handleDrag(event: DragEvent<HTMLFormElement>) {
    event.preventDefault()
    event.stopPropagation()

    if (!disabled) {
      if (event.type === 'dragenter' || event.type === 'dragover') {
        setDragActive(true)
      } else if (event.type === 'dragleave') {
        setDragActive(false)
      }
    }
  }

  function handleDrop(event: DragEvent<HTMLFormElement>) {
    event.preventDefault()
    event.stopPropagation()

    if (!disabled) {
      setDragActive(false)

      if (event.dataTransfer.files && event.dataTransfer.files[0]) {
        if (inputRef.current) {
          inputRef.current.files = event.dataTransfer.files

          if (multiple) {
            setFiles((prevState) => [
              ...prevState,
              ...Array.from(event.dataTransfer.files).map((file) => ({
                id: uuid(),
                file,
              })),
            ])
          } else {
            setFiles([
              {
                id: uuid(),
                file: event.dataTransfer.files[0],
              },
            ])
          }
        }
      }
    }
  }

  function handleChangeFiles(inputFiles: FileList) {
    if (multiple) {
      setFiles((prevState) => [
        ...prevState,
        ...Array.from(inputFiles).map((file) => ({
          id: uuid(),
          file,
        })),
      ])
    } else {
      setFiles(
        Array.from(inputFiles).map((file) => ({
          id: uuid(),
          file,
        })),
      )
    }
  }

  function handleRemove(id: string) {
    setFiles((prevState) => prevState.filter((item) => item.id !== id))
  }

  return (
    <FormControl error={error}>
      <Flex gap={8} direction="column">
        <FileInputContainer
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={inputRef}
            type="file"
            id={`dragdrop${name}`}
            multiple={multiple}
            onChange={(event) => {
              if (event.target.files) {
                handleChangeFiles(event.target.files)
              }
            }}
            disabled={disabled}
            accept={accept}
          />

          <Content
            htmlFor={`dragdrop${name}`}
            dragActive={dragActive}
            isErrored={!!error}
            disabled={disabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="40"
              fill="none"
              viewBox="0 0 30 40"
            >
              <path
                fill="#E4E2E4"
                fillRule="evenodd"
                d="M.6 5.6A4.8 4.8 0 015.4.8h11.007A4.8 4.8 0 0119.8 2.206l8.194 8.194a4.8 4.8 0 011.406 3.393V34.4a4.8 4.8 0 01-4.8 4.8H5.4a4.8 4.8 0 01-4.8-4.8V5.6zM5.4 20a2.4 2.4 0 012.4-2.4h14.4a2.4 2.4 0 010 4.8H7.8A2.4 2.4 0 015.4 20zm2.4 7.2a2.4 2.4 0 000 4.8h14.4a2.4 2.4 0 000-4.8H7.8z"
                clipRule="evenodd"
              />
            </svg>

            <Flex direction="column">
              <Heading size="xs" weight="medium">
                Clique para selecionar o{multiple && 's'} arquivo
                {multiple && 's'}
              </Heading>
              <Text size="sm" lowContrast>
                ou arraste e solte aqui
              </Text>
            </Flex>
          </Content>
        </FileInputContainer>

        <Flex gap={4} direction="column">
          {files.map((item) => (
            <Card key={item.id} padding={8} justify="between" align="center">
              <Flex align="center" gap={8}>
                <Flex
                  width={48}
                  height={48}
                  css={{
                    borderRadius: '$md',
                    background: `url(${URL.createObjectURL(
                      item.file,
                    )}) no-repeat center`,
                    backgroundSize: 'cover',
                  }}
                />

                <Flex direction="column">
                  <Heading size="xxs" weight="medium">
                    {item.file.name}
                  </Heading>
                  <Text size="xs" lowContrast>
                    {formatBytes(item.file.size)}
                  </Text>
                </Flex>
              </Flex>
              <IconButton
                type="button"
                variant="ghost"
                colorScheme="gray"
                onClick={() => handleRemove(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="192"
                  height="192"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="200"
                    y1="56"
                    x2="56"
                    y2="200"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                  <line
                    x1="200"
                    y1="200"
                    x2="56"
                    y2="56"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></line>
                </svg>
              </IconButton>
            </Card>
          ))}
        </Flex>
      </Flex>
    </FormControl>
  )
}

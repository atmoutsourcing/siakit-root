import { Accept, useDropzone } from 'react-dropzone'

import { Container } from './styles'

type FileInputProps = {
  onDrop: (data: File[]) => void
  accept?: Accept
  multiple?: boolean
  disabled?: boolean
}

export function FileInput({
  onDrop,
  accept,
  multiple = true,
  disabled,
}: FileInputProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple,
    disabled,
  })

  return (
    <Container
      {...getRootProps()}
      isDragActive={isDragActive}
      disabled={disabled}
    >
      <input {...getInputProps()} />

      {isDragActive ? (
        <p>Solte os arquivos aqui</p>
      ) : (
        <p>Clique para selecionar ou arraste e solte</p>
      )}
    </Container>
  )
}

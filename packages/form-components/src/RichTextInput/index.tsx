import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react'

import difference from 'lodash.difference'

import { Separator } from '@siakit/separator'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { MenuBar } from './MenuBar'
import { RichTextInputContainer } from './styles'

type RichTextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  removeOptions?: string[]
  defaultValue?: string
}

type RestProps = {
  isErrored: boolean
}

const defaultOptions = [
  'heading-1',
  'heading-2',
  'heading-3',
  'bold',
  'italic',
  'strike',
  'code',
  'quote',
  'link',
  'bullet-list',
  'ordered-list',
  'todo-list',
  'image',
]

export type EditorHandles = {
  setContent: (content: string) => void
  getContent: () => string
}

export const RichTextInput = forwardRef<EditorHandles, RichTextInputProps>(
  (
    { defaultValue, removeOptions = [], placeholder, disabled, ...props },
    ref,
  ) => {
    const editorRef = useRef(null)

    const { isErrored } = props as RestProps

    const editor = useEditor({
      editable: !disabled,
      extensions: [
        StarterKit,
        Link.configure({
          openOnClick: true,
          linkOnPaste: true,
        }),
        Image,
        TaskList.configure({
          HTMLAttributes: {
            class: 'editor-task-list',
          },
        }),
        TaskItem.configure({
          nested: true,
        }),
        Placeholder.configure({
          placeholder,
        }),
      ],
      content: defaultValue,
    })

    function setContent(content: string): void {
      editor?.commands.setContent(content)
    }

    function getContent(): string {
      return editor?.getHTML() ?? ''
    }

    useImperativeHandle(ref, () => {
      return {
        setContent,
        getContent,
      }
    })

    return (
      <RichTextInputContainer isErrored={isErrored} disabled={disabled}>
        <MenuBar
          editor={editor}
          options={difference(defaultOptions, removeOptions)}
          disabled={!!disabled}
        />

        <Separator />

        <EditorContent
          ref={editorRef}
          editor={editor}
          style={{
            flex: 1,
            overflow: 'auto',

            display: 'flex',
            flexDirection: 'column',
          }}
          disabled={disabled}
        />
      </RichTextInputContainer>
    )
  },
)

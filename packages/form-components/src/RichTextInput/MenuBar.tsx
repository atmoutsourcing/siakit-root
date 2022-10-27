import { useRef } from 'react'

import { themeKeys } from '@siakit/core'
import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'
import { Separator } from '@siakit/separator'
import { Tooltip } from '@siakit/tooltip'
import { Editor as EditorProps } from '@tiptap/react'

type MenuBarProps = {
  editor: EditorProps | null
  options: string[]
  disabled: boolean
}

export function MenuBar({ editor, options, disabled }: MenuBarProps) {
  const inputFileRef = useRef<HTMLInputElement>(null)

  function setLink(): void {
    if (editor) {
      const previousUrl = editor.getAttributes('link').href
      const url = window.prompt('URL', previousUrl)

      if (url === null) {
        return
      }

      if (url === '') {
        editor.chain().focus().extendMarkRange('link').unsetLink().run()

        return
      }

      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    }
  }

  if (!editor) {
    return <></>
  }

  return (
    <>
      <input
        ref={inputFileRef}
        type="file"
        onChange={(event) => {
          if (event.target.files?.length) {
            const file = event.target.files[0]

            const reader = new FileReader()
            reader.onloadend = () => {
              if (editor) {
                editor
                  .chain()
                  .focus()
                  .setImage({
                    src: reader.result as string,
                  })
                  .run()
              }
            }
            reader.readAsDataURL(file)
          }
        }}
        style={{ display: 'none' }}
        disabled={disabled}
      />

      <Flex padding="4px 4px 0">
        {options.includes('heading-1') && (
          <Tooltip content="Heading 1">
            <IconButton
              type="button"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              variant={
                editor.isActive('heading', { level: 1 }) ? 'secondary' : 'ghost'
              }
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="40"
                  y1="56"
                  x2="40"
                  y2="176"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="144"
                  y1="116"
                  x2="40"
                  y2="116"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="144"
                  y1="56"
                  x2="144"
                  y2="176"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="196 124 220 108 220 200"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
            </IconButton>
          </Tooltip>
        )}
        {options.includes('heading-2') && (
          <Tooltip content="Heading 2">
            <IconButton
              type="button"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              variant={
                editor.isActive('heading', { level: 2 }) ? 'secondary' : 'ghost'
              }
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="40"
                  y1="56"
                  x2="40"
                  y2="176"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="144"
                  y1="116"
                  x2="40"
                  y2="116"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="144"
                  y1="56"
                  x2="144"
                  y2="176"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <path
                  d="M193.9,118.7A24,24,0,0,1,240,128a23.6,23.6,0,0,1-4.1,13.4h0L192,200h48"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </IconButton>
          </Tooltip>
        )}

        {options.includes('heading-3') && (
          <Tooltip content="Heading 3">
            <IconButton
              type="button"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              variant={
                editor.isActive('heading', { level: 3 }) ? 'secondary' : 'ghost'
              }
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="40"
                  y1="56"
                  x2="40"
                  y2="176"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="144"
                  y1="116"
                  x2="40"
                  y2="116"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="144"
                  y1="56"
                  x2="144"
                  y2="176"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <path
                  d="M192,108h48l-28,40a28,28,0,1,1-19.8,47.8"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </IconButton>
          </Tooltip>
        )}

        <Separator direction="vertical" />

        {options.includes('bold') && (
          <Tooltip content="Bold">
            <IconButton
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              variant={editor.isActive('bold') ? 'secondary' : 'ghost'}
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </IconButton>
          </Tooltip>
        )}

        {options.includes('italic') && (
          <Tooltip content="Italic">
            <IconButton
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              variant={editor.isActive('italic') ? 'secondary' : 'ghost'}
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="152"
                  y1="56"
                  x2="104"
                  y2="200"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="64"
                  y1="200"
                  x2="144"
                  y2="200"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="112"
                  y1="56"
                  x2="192"
                  y2="56"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
              </svg>
            </IconButton>
          </Tooltip>
        )}

        {options.includes('strike') && (
          <Tooltip content="Strike">
            <IconButton
              type="button"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              variant={editor.isActive('strike') ? 'secondary' : 'ghost'}
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="40"
                  y1="128"
                  x2="216"
                  y2="128"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <path
                  d="M76.3,96a25.3,25.3,0,0,1-1.2-8c0-22.1,22-40,52.9-40,23.8,0,42.3,10.6,49.5,25.5"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M72,168c0,22.1,25.1,40,56,40s56-17.9,56-40c0-23.8-21.6-33-45.6-40"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </IconButton>
          </Tooltip>
        )}

        <Separator direction="vertical" />

        {options.includes('code') && (
          <Tooltip content="Code">
            <IconButton
              type="button"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              variant={editor.isActive('codeBlock') ? 'secondary' : 'ghost'}
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="64 88 16 128 64 168"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <polyline
                  points="192 88 240 128 192 168"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="160"
                  y1="40"
                  x2="96"
                  y2="216"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
              </svg>
            </IconButton>
          </Tooltip>
        )}

        {options.includes('quote') && (
          <Tooltip content="Quote">
            <IconButton
              type="button"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              variant={editor.isActive('blockquote') ? 'secondary' : 'ghost'}
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
                <path
                  d="M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </IconButton>
          </Tooltip>
        )}

        {options.includes('link') && (
          <>
            {editor.isActive('link') ? (
              <Tooltip content="Link">
                <IconButton
                  type="button"
                  onClick={() => editor.chain().focus().unsetLink().run()}
                  variant="secondary"
                  disabled={disabled}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill={themeKeys.colors.gray12.value}
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="96"
                      y1="72"
                      x2="96"
                      y2="48"
                      fill="none"
                      stroke={themeKeys.colors.gray12.value}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></line>
                    <line
                      x1="160"
                      y1="208"
                      x2="160"
                      y2="184"
                      fill="none"
                      stroke={themeKeys.colors.gray12.value}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></line>
                    <line
                      x1="72"
                      y1="96"
                      x2="48"
                      y2="96"
                      fill="none"
                      stroke={themeKeys.colors.gray12.value}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></line>
                    <line
                      x1="208"
                      y1="160"
                      x2="184"
                      y2="160"
                      fill="none"
                      stroke={themeKeys.colors.gray12.value}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></line>
                    <path
                      d="M71,128.4,59.7,139.7a40,40,0,0,0,56.6,56.6L127.6,185"
                      fill="none"
                      stroke={themeKeys.colors.gray12.value}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></path>
                    <path
                      d="M185,127.6l11.3-11.3a40,40,0,0,0-56.6-56.6L128.4,71"
                      fill="none"
                      stroke={themeKeys.colors.gray12.value}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></path>
                  </svg>
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip content="Remove link">
                <IconButton
                  type="button"
                  onClick={setLink}
                  variant="ghost"
                  disabled={disabled}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill={themeKeys.colors.gray12.value}
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <path
                      d="M122.3,71.4l19.8-19.8a44.1,44.1,0,0,1,62.3,62.3l-28.3,28.2a43.9,43.9,0,0,1-62.2,0"
                      fill="none"
                      stroke={themeKeys.colors.gray12.value}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></path>
                    <path
                      d="M133.7,184.6l-19.8,19.8a44.1,44.1,0,0,1-62.3-62.3l28.3-28.2a43.9,43.9,0,0,1,62.2,0"
                      fill="none"
                      stroke={themeKeys.colors.gray12.value}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    ></path>
                  </svg>
                </IconButton>
              </Tooltip>
            )}
          </>
        )}

        <Separator direction="vertical" />

        {options.includes('bullet-list') && (
          <Tooltip content="List">
            <IconButton
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              variant={editor.isActive('bulletList') ? 'secondary' : 'ghost'}
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="88"
                  y1="64"
                  x2="216"
                  y2="64"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="88"
                  y1="128"
                  x2="216"
                  y2="128"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="88"
                  y1="192"
                  x2="216"
                  y2="192"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <circle cx="44" cy="64" r="12"></circle>
                <circle cx="44" cy="128" r="12"></circle>
                <circle cx="44" cy="192" r="12"></circle>
              </svg>
            </IconButton>
          </Tooltip>
        )}

        {options.includes('ordered-list') && (
          <Tooltip content="Ordered list">
            <IconButton
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              variant={editor.isActive('orderedList') ? 'secondary' : 'ghost'}
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="104"
                  y1="128"
                  x2="216"
                  y2="128"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="104"
                  y1="64"
                  x2="216"
                  y2="64"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="104"
                  y1="192"
                  x2="216"
                  y2="192"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="40 60 56 52 56 108"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <path
                  d="M41.1,152.6a14,14,0,1,1,24.5,13.2L40,200H68"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </IconButton>
          </Tooltip>
        )}

        {options.includes('todo-list') && (
          <Tooltip content="To-Do list">
            <IconButton
              type="button"
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              variant={editor.isActive('taskList') ? 'secondary' : 'ghost'}
              disabled={disabled}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill={themeKeys.colors.gray12.value}
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="128"
                  y1="128"
                  x2="216"
                  y2="128"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="128"
                  y1="64"
                  x2="216"
                  y2="64"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="128"
                  y1="192"
                  x2="216"
                  y2="192"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="92 48 57.3 80 40 64"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <polyline
                  points="92 112 57.3 144 40 128"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <polyline
                  points="92 176 57.3 208 40 192"
                  fill="none"
                  stroke={themeKeys.colors.gray12.value}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
            </IconButton>
          </Tooltip>
        )}

        {options.includes('image') && (
          <Tooltip content="Image">
            <Flex padding="0 16px">
              <IconButton
                type="button"
                onClick={() => inputFileRef.current?.click()}
                disabled={disabled}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="192"
                  height="192"
                  fill={themeKeys.colors.gray1.value}
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <rect
                    x="32"
                    y="48"
                    width="192"
                    height="160"
                    rx="8"
                    fill="none"
                    stroke={themeKeys.colors.gray1.value}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></rect>
                  <path
                    d="M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184"
                    fill="none"
                    stroke={themeKeys.colors.gray1.value}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <circle cx="156" cy="100" r="12"></circle>
                </svg>
              </IconButton>
            </Flex>
          </Tooltip>
        )}
      </Flex>
    </>
  )
}

import { IconButton } from '@siakit/icon-button'

function ClearIndicatorCustom({ innerProps }: any) {
  return (
    <IconButton
      type="button"
      size="sm"
      variant="ghost"
      colorScheme="gray"
      icon={
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
      }
      tabIndex={-1}
      {...innerProps}
    />
  )
}

export { ClearIndicatorCustom }

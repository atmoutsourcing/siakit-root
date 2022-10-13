import { ReactNode } from 'react'

import { Heading } from '@siakit/heading'

import { PageHeaderContainer } from './styles'

interface PageHeaderProps {
  title: string
  children?: ReactNode
  onGoBack?: () => void
}

export function PageHeader({
  title,
  children,
  onGoBack,
  ...props
}: PageHeaderProps) {
  return (
    <PageHeaderContainer {...props}>
      <div>
        {onGoBack && (
          <button type="button" onClick={onGoBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M18 10a.75.75 0 01-.75.75H4.612l5.158 4.96a.75.75 0 11-1.04 1.08l-6.5-6.25a.75.75 0 010-1.08l6.5-6.25a.75.75 0 111.04 1.08L4.612 9.25H17.25A.75.75 0 0118 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        <Heading size="xs">{title}</Heading>
      </div>
      {children}
    </PageHeaderContainer>
  )
}

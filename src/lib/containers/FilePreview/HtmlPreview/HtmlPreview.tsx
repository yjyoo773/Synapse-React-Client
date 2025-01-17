import React, { useMemo } from 'react'
import xss from 'xss'
import { xssOptions } from '../../../utils/functions/SanitizeHtmlUtils'
import { useGetIsUserMemberOfTeam } from '../../../utils/hooks/SynapseAPI/team/useTeamMembers'
import { TRUSTED_HTML_USERS_TEAM_ID } from '../../../utils/SynapseConstants'
import { SynapseSpinner } from '../../LoadingScreen'
import { SanitizedWarning } from './SanitizedWarning'

/**
 * @param options
 * @returns HTML that is cleaned if it is not trusted. undefined if `isLoading` is true.
 */
function useCleanHtml(options: {
  rawHtml: string
  isLoading: boolean
  isTrusted: boolean
}): string | undefined {
  const { rawHtml, isLoading, isTrusted } = options
  return useMemo(() => {
    if (isLoading) {
      return undefined
    }
    if (isTrusted) {
      return rawHtml
    } else {
      return xss(rawHtml, xssOptions)
    }
  }, [isLoading, isTrusted, rawHtml])
}

export type HtmlPreviewProps = {
  createdByUserId: string
  rawHtml: string
}

/**
 * Renders raw HTML. Uses file handle data to determine if the content should be sanitized.
 * @param props
 * @returns
 */
export default function HtmlPreview(props: HtmlPreviewProps) {
  const { createdByUserId, rawHtml } = props

  const { data: teamMembership, isLoading } = useGetIsUserMemberOfTeam(
    TRUSTED_HTML_USERS_TEAM_ID,
    createdByUserId,
  )

  const htmlIsCreatedByTrustedUser = !!teamMembership

  const cleanHtml = useCleanHtml({
    rawHtml,
    isLoading,
    isTrusted: htmlIsCreatedByTrustedUser,
  })

  if (isLoading) {
    return <SynapseSpinner />
  }

  return (
    <>
      {rawHtml !== cleanHtml && <SanitizedWarning rawHtml={rawHtml} />}
      <iframe srcDoc={cleanHtml} style={{ border: 0, width: '100%' }} />
    </>
  )
}

export const EXPORTED_FOR_UNIT_TESTING = {
  useCleanHtml,
}

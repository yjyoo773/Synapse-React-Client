import React from 'react'
import { GraphNodeLinkData } from './types/IDataDictionaryTypes'
interface GraphNetworkLineProps {
  link: GraphNodeLinkData
}

export default function GraphNetworkLine({
  link: { source, linkColor },
  ...props
}: GraphNetworkLineProps) {
  return (
    <line
      {...props}
      stroke={linkColor}
      stroke-opacity={source === 'hiddenRoot' ? 0 : 1}
    />
  )
}

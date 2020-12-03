import React from 'react'
import { GraphNodeLinkData } from './types/IDataSchemaTypes'
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
      strokeWidth={3}
      strokeOpacity={source === 'hiddenRoot' ? 0 : 1}
    />
  )
}

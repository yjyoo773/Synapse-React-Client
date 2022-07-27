import React from 'react'
import {
  Node,
  Position,
  ConnectionLineType,
  Edge,
  MarkerType,
} from 'react-flow-renderer'
import { ActivityNodeLabel, ActivityNodeLabelProps } from './ActivityNodeLabel'
import { EntityNodeLabel } from './EntityNodeLabel'
import { ExpandGraphNodeLabel } from './ExpandGraphNodeLabel'
import {
  ExternalGraphNodeLabel,
  ExternalGraphNodeLabelProps,
} from './ExternalGraphNodeLabel'
import dagre from 'dagre'
import _ from 'lodash'
import { DummyNodeLabel } from './DummyNodeLabel'
import { Reference } from '../../utils/synapseTypes'

export enum NodeType {
  ENTITY = 'EntityNode',
  EXTERNAL = 'ExternalNode',
  ACTIVITY = 'ActivityNode',
  EXPAND = 'ExpandNode',
  DUMMY = 'DummyNode',
}

type ProvenanceNodeLabelProps =
  | ActivityNodeLabelProps
  | ExternalGraphNodeLabelProps
  | Reference

export type ProvenanceNodeProps = {
  type: NodeType
  data: ProvenanceNodeLabelProps
}

export type ProvenanceNodeData = {
  label: JSX.Element
  props: ProvenanceNodeLabelProps
  type: NodeType
}

export const getProvenanceNode = (props: ProvenanceNodeProps): Node => {
  const { type, data } = props
  let nodeLabel: JSX.Element
  switch (type) {
    case NodeType.ENTITY:
      nodeLabel = <EntityNodeLabel {...(data as Reference)} />
      break
    case NodeType.EXTERNAL:
      nodeLabel = (
        <ExternalGraphNodeLabel {...(data as ExternalGraphNodeLabelProps)} />
      )
      break
    case NodeType.ACTIVITY:
      nodeLabel = <ActivityNodeLabel {...(data as ActivityNodeLabelProps)} />
      break
    case NodeType.EXPAND:
      nodeLabel = <ExpandGraphNodeLabel />
      break
    case NodeType.DUMMY:
      nodeLabel = <DummyNodeLabel />
      break
    default:
      nodeLabel = <p>Unrecognized node type: {type}</p>
      break
  }
  const nodeData: ProvenanceNodeData = {
    label: nodeLabel,
    props: data,
    type: type,
  }
  return {
    id: getNodeId(props),
    position: { x: 100, y: 100 }, // hard coded, let graph layout library figure this out
    data: nodeData,
    connectable: false,
    draggable: false,
    // selectable: false, // like to make unselectable, but node contents become non-interactive
    className: `${type}`,
  }
}

export const getProvenanceEdge = (
  node1Props: ProvenanceNodeProps,
  node2Props: ProvenanceNodeProps,
): Edge => {
  const node1Id = getNodeId(node1Props)
  const node2Id = getNodeId(node2Props)
  return {
    id: `${node1Id}-${node2Id}`,
    source: node1Id,
    target: node2Id,
    animated: true,
    type: ConnectionLineType.SimpleBezier,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  }
}

export const getNodeId = (props: ProvenanceNodeProps) => {
  const { type, data } = props
  switch (type) {
    case NodeType.ENTITY:
      return `${(data as Reference).targetId}.${
        (data as Reference).targetVersionNumber ?? 'latest'
      }`
    case NodeType.EXTERNAL:
      return `${(data as ExternalGraphNodeLabelProps).url}`
    case NodeType.ACTIVITY:
      return `${(data as ActivityNodeLabelProps).id}`
    case NodeType.EXPAND:
      return `expand.node.${(data as Reference).targetId}.${
        (data as Reference).targetVersionNumber ?? 'latest'
      }`
    case NodeType.DUMMY:
      return `dummy.node.${(data as Reference).targetId}.${
        (data as Reference).targetVersionNumber ?? 'latest'
      }`
  }
}

// layout
const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const getNodeHeight = (node: Node) => {
  const nodeData: ProvenanceNodeData = node.data as ProvenanceNodeData
  return nodeData.type == NodeType.EXPAND ? 30 : 100
}
const getNodeWidth = (node: Node) => {
  const nodeData: ProvenanceNodeData = node.data as ProvenanceNodeData
  return nodeData.type == NodeType.EXPAND ? 30 : 172
}

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction: string,
) => {
  const isHorizontal = direction === 'LR'
  dagreGraph.setGraph({ rankdir: direction })

  nodes.forEach(node => {
    dagreGraph.setNode(node.id, {
      width: getNodeWidth(node),
      height: getNodeHeight(node),
    })
  })

  edges.forEach(edge => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  nodes.forEach(node => {
    const nodeWithPosition = dagreGraph.node(node.id)
    node.targetPosition = isHorizontal ? Position.Left : Position.Top
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - getNodeWidth(node) / 2,
      y: nodeWithPosition.y - getNodeHeight(node) / 2,
    }

    return node
  })

  return { nodes, edges }
}

export const isArrayEqual = (x: any[], y: any[]) => {
  return _(x).differenceWith(y, _.isEqual).isEmpty()
}

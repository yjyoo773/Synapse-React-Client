import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import 'react-reflex/styles.css'
import { SizeMe } from 'react-sizeme'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../../utils'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import useGetEntityBundle from '../../utils/hooks/SynapseAPI/useEntityBundle'
import { EntityHeader, Reference } from '../../utils/synapseTypes'
import { EntityType } from '../../utils/synapseTypes/EntityType'
import { ErrorBanner } from '../ErrorBanner'
import {
  EntityDetailsList,
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from './details/EntityDetailsList'
import { FinderScope, TreeView } from './tree/TreeView'

library.add(faTimes, faSearch, faCircle)

const DEFAULT_VISIBLE_TYPES = [EntityType.PROJECT, EntityType.FOLDER]

const ErrorFallback: React.FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert" className="SRC-marginBottomTop">
      <ErrorBanner error={error}></ErrorBanner>
      <Button onClick={resetErrorBoundary}>Reload</Button>
    </div>
  )
}
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000, // 30s
      retry: false, // SynapseClient knows which queries to retry
    },
  },
})

const EntityPathDisplay: React.FunctionComponent<{
  sessionToken: string
  entity: Reference
  toggleSelection: (entity: Reference) => void
}> = ({ sessionToken, entity, toggleSelection }) => {
  const ENTITY_PATH_TOOLTIP_ID = 'EntityPathDisplayReactTooltip'

  const { data: bundle } = useGetEntityBundle(
    sessionToken,
    entity.targetId,
    { includeEntity: true, includeEntityPath: true },
    entity.targetVersionNumber,
  )

  const [entityName, setEntityName] = useState('')
  const [fullPath, setFullPath] = useState('')
  const [displayedPath, setDisplayedPath] = useState('')

  useEffect(() => {
    if (bundle?.path?.path) {
      setEntityName(bundle.path.path[bundle.path.path.length - 1].name)
      const path = bundle.path.path.slice(1, bundle.path.path.length - 1) // drop the first element, which is always syn4489 "root"
      const _fullPath = path.map(header => header.name).join('/')
      setFullPath(_fullPath)
      if (path.length < 4) {
        // Show the full path from project to entity
        setDisplayedPath(_fullPath)
      } else {
        // Truncate the path, showing only project, parent, and self
        setDisplayedPath(
          path[0].name + // Project
            '/…/' +
            path
              .slice(path.length - 1) // drop everything except parent and self
              .map(header => header.name)
              .join('/'),
        )
      }
    }
  }, [bundle])

  return (
    <div className="EntityFinder__Selected__Row">
      <ReactTooltip id={ENTITY_PATH_TOOLTIP_ID} delayShow={500} place={'top'} />
      <span
        className="EntityFinder__Selected__Row__DeselectButton"
        onClick={() => {
          toggleSelection(entity)
        }}
      >
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon
            className="EntityFinder__Selected__Row__DeselectButton__IconCircle"
            icon={faCircle}
            size="lg"
          />
          <FontAwesomeIcon
            className="EntityFinder__Selected__Row__DeselectButton__IconCross"
            size={'sm'}
            icon={faTimes}
          />
        </span>
      </span>
      <span
        data-for={ENTITY_PATH_TOOLTIP_ID}
        data-tip={`${fullPath}/${entityName}`}
      >
        {displayedPath ? displayedPath + '/' : ''}
      </span>
      <span className="EntityFinder__Selected__DeselectButton__EntityName">
        {entityName}
      </span>
      {entity.targetVersionNumber && (
        <span> (Version {entity.targetVersionNumber})</span>
      )}
    </div>
  )
}

export type EntityFinderProps = {
  sessionToken: string
  /** Required if `initialScope` is The SynID of the entity that should open by default. This dictates the 'Current Project' */
  initialContainerId: string
  /** Whether or not it is possible to select multiple entities */
  selectMultiple: boolean
  /** Callback invoked when the selection changes */
  onSelectedChange: (selected: Reference[]) => void
  /** The initial appearance of the entity finder. Possible values include "Current Project", "All Projects", "Projects Created By Me", "My Favorites" */
  initialScope: FinderScope
  /** Whether or not versions may be specified when selecting applicable entities */
  showVersionSelection?: boolean
  /** The entity types to show in the details view (right pane) */
  showTypes: EntityType[]
  /** The entity types that may be selected. Types in `showTypes` that are not in `selectableTypes` will appear as disabled options */
  selectableTypes?: EntityType[]
  /** The types to show in the tree used to navigate. */
  visibleTypesInTree?: EntityType[]
  /** The text to show before the list of selected entities */
  selectedCopy?: string
}

export const EntityFinder: React.FunctionComponent<EntityFinderProps> = ({
  sessionToken,
  initialScope,
  initialContainerId,
  selectMultiple,
  onSelectedChange,
  showVersionSelection = true,
  showTypes,
  selectableTypes = Object.values(EntityType),
  selectedCopy = 'Selected',
  visibleTypesInTree = DEFAULT_VISIBLE_TYPES,
}: EntityFinderProps) => {
  const [selectedEntities, setSelectedEntities] = useState<Reference[]>([])

  const [searchActive, setSearchActive] = useState(false)
  const [searchTerms, setSearchTerms] = useState<string[]>()
  const [searchByIdResults, setSearchByIdResults] = useState<EntityHeader[]>([])
  const [
    configFromTreeView,
    setConfigFromTreeView,
  ] = useState<EntityDetailsListDataConfiguration>({
    type: EntityDetailsListDataConfigurationType.PROMPT,
  })

  const isSelected = (entity: Reference) => {
    return selectedEntities.some(
      s =>
        s.targetId === entity.targetId &&
        s.targetVersionNumber === entity.targetVersionNumber,
    )
  }

  const otherVersionSelected = (entity: Reference) => {
    return selectedEntities.some(
      s =>
        s.targetId === entity.targetId &&
        s.targetVersionNumber !== entity.targetVersionNumber,
    )
  }

  const toggleSelection = (entity: Reference) => {
    if (isSelected(entity)) {
      // remove from selection
      setSelectedEntities(
        selectedEntities.filter(e => e.targetId !== entity.targetId),
      )
    } else if (otherVersionSelected(entity)) {
      // replace with selected version
      setSelectedEntities([
        ...selectedEntities.filter(e => e.targetId !== entity.targetId),
        entity,
      ])
    } else {
      // add to selection
      if (!selectMultiple) {
        setSelectedEntities([entity])
      } else {
        setSelectedEntities([
          ...selectedEntities.filter(s => s.targetId !== entity.targetId),
          entity,
        ])
      }
    }
  }

  useEffect(() => {
    onSelectedChange(selectedEntities)
  }, [onSelectedChange, selectedEntities])

  useEffect(() => {
    if (searchTerms?.length === 1) {
      const synIdMatch = searchTerms[0].match(SYNAPSE_ENTITY_ID_REGEX)
      if (synIdMatch) {
        SynapseClient.getEntityHeaders(
          [
            {
              targetId: synIdMatch[1],
              targetVersionNumber: synIdMatch[2]
                ? parseInt(synIdMatch[2])
                : undefined,
            },
          ],
          sessionToken,
        ).then(response => {
          setSearchByIdResults(response.results)
        })
      }
    } else {
      setSearchByIdResults([])
    }
  }, [sessionToken, searchTerms])

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="bootstrap-4-backport EntityFinder">
          <div className="EntityFinder__Search">
            {searchActive ? (
              <>
                <FontAwesomeIcon
                  size={'sm'}
                  icon={faSearch}
                  style={{ position: 'relative', left: '22px', top: '1px' }}
                />
                <FormControl
                  autoFocus={true}
                  className="EntityFinder__Search__Input"
                  type="search"
                  placeholder="Search all of Synapse"
                  onKeyDown={(event: any) => {
                    if (event.key === 'Enter') {
                      if (event.target.value === '') {
                        setSearchTerms(undefined)
                      } else {
                        setSearchTerms([event.target.value.trim()])
                      }
                    }
                  }}
                ></FormControl>
                <FontAwesomeIcon
                  size={'sm'}
                  icon={faTimes}
                  style={{
                    cursor: 'pointer',
                    position: 'relative',
                    left: '-20px',
                    marginRight: '-8px',
                  }}
                  onClick={() => {
                    setSearchActive(false)
                    setSearchTerms(undefined)
                  }}
                />
              </>
            ) : (
              <Button
                variant="gray-primary-500"
                className="EntityFinder__Search__SearchButton"
                onClick={() => setSearchActive(true)}
              >
                <FontAwesomeIcon size={'sm'} icon={faSearch} />
                Search
              </Button>
            )}
          </div>
          {/* We have a separate Details component for search in order to preserve state in the other component between searches */}
          {searchActive && (
            <EntityDetailsList
              sessionToken={sessionToken}
              configuration={
                searchByIdResults && searchByIdResults.length > 0
                  ? {
                      type: EntityDetailsListDataConfigurationType.HEADER_LIST,
                      headerList: searchByIdResults,
                    }
                  : {
                      type:
                        EntityDetailsListDataConfigurationType.ENTITY_SEARCH,
                      query: {
                        queryTerm: searchTerms,
                      },
                    }
              }
              showVersionSelection={showVersionSelection}
              selectColumnType={selectMultiple ? 'checkbox' : 'radio'}
              selected={selectedEntities}
              includeTypes={showTypes}
              selectableTypes={selectableTypes}
              toggleSelection={toggleSelection}
            />
          )}
          {
            <div style={searchActive ? { display: 'none' } : {}}>
              <div className="EntityViewReflexContainer">
                <SizeMe>
                  {({ size }) => (
                    <ReflexContainer
                      key={(!!size.width).toString()}
                      orientation="vertical"
                      windowResizeAware
                    >
                      <ReflexElement minSize={200} size={350}>
                        <TreeView
                          sessionToken={sessionToken}
                          setDetailsViewConfiguration={setConfigFromTreeView}
                          showDropdown={true}
                          visibleTypes={visibleTypesInTree}
                          initialScope={initialScope}
                          initialContainerId={initialContainerId}
                        />
                      </ReflexElement>
                      <ReflexSplitter></ReflexSplitter>
                      <ReflexElement minSize={400}>
                        <EntityDetailsList
                          sessionToken={sessionToken}
                          configuration={configFromTreeView}
                          showVersionSelection={showVersionSelection}
                          selected={selectedEntities}
                          includeTypes={showTypes}
                          selectableTypes={selectableTypes}
                          selectColumnType={
                            selectMultiple ? 'checkbox' : 'radio'
                          }
                          toggleSelection={toggleSelection}
                        />
                      </ReflexElement>
                    </ReflexContainer>
                  )}
                </SizeMe>
              </div>
            </div>
          }
          <div className="EntityFinder__Selected">
            <h2>{selectedCopy}</h2>
            {selectedEntities.length > 0 ? (
              <div>
                {selectedEntities.map(e => (
                  <div
                    key={`${e.targetId}${
                      e.targetVersionNumber ? `.${e.targetVersionNumber}` : ''
                    }`}
                  >
                    <EntityPathDisplay
                      sessionToken={sessionToken}
                      entity={e}
                      toggleSelection={toggleSelection}
                    ></EntityPathDisplay>
                  </div>
                ))}
              </div>
            ) : (
              'Nothing selected. Make a selection above.'
            )}
          </div>
        </div>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}

export default EntityFinder
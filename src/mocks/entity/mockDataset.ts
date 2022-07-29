import { Dataset, EntityBundle, EntityPath } from '../../lib/utils/synapseTypes'
import { VersionInfo } from '../../lib/utils/synapseTypes/VersionInfo'
import { MOCK_USER_ID } from '../user/mock_user_profile'
import { MockEntityData } from './MockEntityData'
import mockProjectEntityData from './mockProject'

const MOCK_DATASET_ENTITY_ID = 'syn234'
const MOCK_DATASET_NAME = 'A Mocked Dataset'

export const mockDatasetEntity: Dataset = {
  id: MOCK_DATASET_ENTITY_ID,
  parentId: mockProjectEntityData.id,
  name: MOCK_DATASET_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.Dataset',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  versionNumber: 3,
  versionLabel: 'in progress',
  versionComment: 'in progress',
  isLatestVersion: true,
  etag: '00000000-0000-0000-0000-000000000000',
  items: [],
  columnIds: [],
}

const path: EntityPath = {
  path: [
    {
      name: 'root',
      id: 'syn4489',
      type: 'org.sagebionetworks.repo.model.Folder',
    },
    {
      name: mockProjectEntityData.name,
      id: mockProjectEntityData.id,
      type: 'org.sagebionetworks.repo.model.Project',
    },
    {
      name: MOCK_DATASET_NAME,
      id: MOCK_DATASET_ENTITY_ID,
      type: 'org.sagebionetworks.repo.model.FileEntity',
    },
  ],
}

const versions: Record<number, Dataset> = {
  1: {
    ...mockDatasetEntity,
    versionNumber: 1,
    versionLabel: 'snapshot 1',
    versionComment: '',
    isLatestVersion: false,
  },
  2: {
    ...mockDatasetEntity,
    versionNumber: 2,
    versionLabel: 'snapshot 2',
    versionComment: '',
    isLatestVersion: false,
  },
}

const versionInfo: VersionInfo[] = [
  {
    id: MOCK_DATASET_ENTITY_ID,
    versionNumber: 2,
    versionLabel: 'snapshot 2',
    versionComment: '',
    isLatestVersion: false,
    modifiedBy: MOCK_USER_ID.toString(),
    modifiedByPrincipalId: MOCK_USER_ID.toString(),
    modifiedOn: '2022-03-22T18:50:22.336Z',
  },
  {
    id: MOCK_DATASET_ENTITY_ID,
    versionNumber: 1,
    versionLabel: 'snapshot 1',
    versionComment: '',
    isLatestVersion: false,
    modifiedBy: MOCK_USER_ID.toString(),
    modifiedByPrincipalId: MOCK_USER_ID.toString(),
    modifiedOn: '2022-03-22T18:47:34.797Z',
  },
]

const bundle: EntityBundle = {
  entity: mockDatasetEntity,
  path: path,
}

const mockDatasetData: MockEntityData<Dataset> = {
  id: MOCK_DATASET_ENTITY_ID,
  name: MOCK_DATASET_NAME,
  entity: mockDatasetEntity,
  path: path,
  bundle: bundle,
  versions: versions,
  versionInfo: versionInfo,
}

export default mockDatasetData
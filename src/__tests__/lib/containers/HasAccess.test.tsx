import * as React from 'react'
import { shallow } from 'enzyme'
import HasAccess, { HasAccessProps, ExternalFileHandleConcreteTypeEnum, GIGABYTE_SIZE, GoogleCloudFileHandleEnum } from '../../../lib/containers/HasAccess'
import { 
  mockUnmetControlledDataRestrictionInformation,
  mockOpenRestrictionInformation,
 } from '../../../mocks/mock_has_access_data'
import _ from 'lodash'
import { RestrictionInformationRequest, RestrictableObjectType } from 'lib/utils/jsonResponses/RestrictionInformation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faUnlockAlt, faLink, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FileHandle } from 'lib/utils/jsonResponses/FileHandle'

const SynapseClient = require('../../../lib/utils/SynapseClient')
const token: string = '123444'
const synapseId = 'syn9988882982'

const createShallowComponent = async (
  props: HasAccessProps,
  disableLifecycleMethods: boolean = false,
) => {
  const wrapper = await shallow<HasAccess>(<HasAccess {...props} />, {
    disableLifecycleMethods,
  })

  const instance = wrapper.instance()
  return { wrapper, instance }
}
const props: HasAccessProps = {
  token,
  synapseId
}

describe('basic tests', () => {
  it('get open data', async () => {
    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockOpenRestrictionInformation),
    )
    const { wrapper, instance } = await createShallowComponent(props)
    instance.getRestrictionInformation()
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: synapseId
    }
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledWith(
      request,
      token
    )
    expect(instance.state.restrictionInformation).toEqual(mockOpenRestrictionInformation)
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faUnlockAlt)
  })

  it('works when an ExternalFileHandle is passed in', async () => {
    const externalFileHandle: FileHandle = {
      id: '',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: ExternalFileHandleConcreteTypeEnum.ExternalFileHandle,
      contentType: '',
      contentMd5: '',
      fileName: '',
      storageLocationId: 0,
      contentSize: 0
    }
    const { wrapper } = await createShallowComponent({...props, fileHandle: externalFileHandle})
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faLink)
  })

  it('works when a cloud file handle is passed in', async () => {
    const externalFileHandle: FileHandle = {
      id: '',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: GoogleCloudFileHandleEnum.GoogleCloudFileHandle,
      contentType: '',
      contentMd5: '',
      fileName: '',
      storageLocationId: 0,
      contentSize: 0
    }
    const { wrapper } = await createShallowComponent({...props, fileHandle: externalFileHandle})
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faLink)
  })

  it('works when the file is too large', async () => {
    const externalFileHandle: FileHandle = {
      id: '',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: '',
      contentType: '',
      contentMd5: '',
      fileName: '',
      storageLocationId: 0,
      contentSize: GIGABYTE_SIZE
    }
    const { wrapper } = await createShallowComponent({...props, fileHandle: externalFileHandle})
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faDatabase)
  })

  it('works when download is IsOpenNoRestrictions', async () => {
    const externalFileHandle: FileHandle = {
      id: '',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: '',
      contentType: '',
      contentMd5: '',
      fileName: '',
      storageLocationId: 0,
      contentSize: 0
    }
    const { wrapper } = await createShallowComponent({...props, fileHandle: externalFileHandle})
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faUnlockAlt)
  })

  it('get unmet controlled access data', async () => {
    SynapseClient.getRestrictionInformation = jest.fn(() =>
      Promise.resolve(mockUnmetControlledDataRestrictionInformation),
    )

    const { wrapper, instance } = await createShallowComponent(props)
    instance.getRestrictionInformation()
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: synapseId
    }
    expect(SynapseClient.getRestrictionInformation).toHaveBeenCalledWith(
      request,
      token
    )
    expect(instance.state.restrictionInformation).toEqual(mockUnmetControlledDataRestrictionInformation)
    const link = wrapper.find('a')
    expect(link).toHaveLength(1)
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faMinusCircle)
  })

  it('Does not call getRestrictionInformation when forceIsRestricted=true', async () => {
    const mockFn = jest.fn()
    SynapseClient.getRestrictionInformation = mockFn
    const { wrapper } = await createShallowComponent({ ...props, forceIsRestricted: true})
    expect(mockFn).not.toHaveBeenCalled()
    const link = wrapper.find('a')
    expect(link).toHaveLength(1)
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(2)
    expect(icons.get(1).props.icon).toEqual(faMinusCircle)
  })
})
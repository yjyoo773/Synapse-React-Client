import { ConcreteEntityType } from './ConcreteEntityType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityHeader.html
export type EntityHeader = {
  name: string //	The name of the entity
  id: string //	The id of the entity
  type: ConcreteEntityType //	The type of the entity
  versionNumber: number //	The version number of the entity
  versionLabel: string //	The user defined version label of the entity
  benefactorId: number //	The ID of the entity that this Entity's ACL is inherited from.
  createdOn: string //	The date this entity was created.
  modifiedOn: string //	The date this entity was last modified.
  createdBy: string //	The ID of the user that created this entity.
  modifiedBy: string //	The ID of the user that last modified this entity.
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityPath.html
export type EntityPath = {
  path: EntityHeader[] // The list of all entities in this entity's path. The first element is the root parent and the last element (n) is the entity.
}

import type { UniqueEntityID } from '../entity/unique-entity-id.js'

export interface DomainEvent {
  ocurredAt: Date
  getAggregateId(): UniqueEntityID
}

import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import { DomainEvent } from '@/core/events/domain-event.js'
import { Answer } from '../entities/answer.js'

export class AnswerCreatedEvent implements DomainEvent {
  public ocurredAt: Date
  public answer: Answer

  constructor(answer: Answer) {
    this.answer = answer
    this.ocurredAt = new Date()
  }

  getAggregateId(): UniqueEntityID {
    return this.answer.id
  }
}

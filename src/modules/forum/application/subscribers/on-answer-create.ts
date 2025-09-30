import { DomainEvents } from '@/core/events/domiain-events.js'
import { EventHandler } from '@/core/events/event-handler.js'
import { AnswerCreatedEvent } from '../../enterprise/events/answer-created-events.js'
import { QuestionsRepository } from '../repositories/question-repositories.js'
import { SendNotificationUseCase } from '@/modules/notification/application/use-case/send-notification.js'

export class OnAnswerCreated implements EventHandler {
  constructor(
    private questionsRepository: QuestionsRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewAnswerNotification.bind(this),
      AnswerCreatedEvent.name,
    )
  }

  private async sendNewAnswerNotification({ answer }: AnswerCreatedEvent) {
    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    )

    if (question) {
      await this.sendNotification.execute({
        recipientId: answer.authorId.toString(),
        title: `Nova resposta em "${question.title.substring(0, 40).concat('...')}"`,
        content: answer.excerpt,
      })
    }
  }
}

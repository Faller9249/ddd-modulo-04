import { DomainEvents } from '@/core/events/domiain-events.js'
import { EventHandler } from '@/core/events/event-handler.js'
import { AnswersRepository } from '@/modules/forum/application/repositories/answer-repositories.js'
import { QuestionBestAnswerChosenEvent } from '@/modules/forum/enterprise/events/question-best-answer-chosen-event.js'
import { SendNotificationUseCase } from '../use-case/send-notification.js'

export class OnQuestionBestAnswerChosen implements EventHandler {
  constructor(
    private answersRepository: AnswersRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendQuestionBestAnswerNotification.bind(this),
      QuestionBestAnswerChosenEvent.name,
    )
  }

  private async sendQuestionBestAnswerNotification({
    question,
    bestAnswerId,
  }: QuestionBestAnswerChosenEvent) {
    const answer = await this.answersRepository.findById(
      bestAnswerId.toString(),
    )

    if (answer) {
      await this.sendNotification.execute({
        recipientId: answer.authorId.toString(),
        title: `Sua resposta foi escolhida!`,
        content: `A resposta que você enviou em "${question.title
          .substring(0, 20)
          .concat('...')}" foi escolhida pelo autor!"`,
      })
    }
  }
}

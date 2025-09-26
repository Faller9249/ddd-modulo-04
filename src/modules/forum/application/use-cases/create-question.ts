import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import type {
  CreateQuestionUseCaseRequest,
  CreateQuestionUseCaseResponse,
} from '../../../../@types/@entities.model.js'
import { Question } from '../../enterprise/entities/question.js'
import type { QuestionsRepository } from '../repositories/question-repositories.js'
import { right } from '@/core/either.js'
import { QuestionAttachment } from '../../enterprise/entities/question-attachment.js'
import { QuestionAttachmentList } from '../../enterprise/entities/question-attachment-list.js'

export class CreateQuestionUseCase {
  constructor(private questionRepository: QuestionsRepository) {}

  async execute({
    authorId,
    title,
    content,
    attachmentsIds,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      title,
      content,
    })
    const questionAttachments = attachmentsIds.map((attachmentId) => {
      return QuestionAttachment.create({
        attachmentId: new UniqueEntityID(attachmentId),
        questionId: question.id,
      })
    })

    question.attachments = new QuestionAttachmentList(questionAttachments)

    await this.questionRepository.create(question)

    return right({
      question,
    })
  }
}

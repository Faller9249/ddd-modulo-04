import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import type {
  CreateQuestionUseCaseRequest,
  CreateQuestionUseCaseResponse,
} from '../../../../@types/@entities.model.js'
import { Question } from '../../enterprise/entities/question.js'
import type { QuestionsRepository } from '../repositories/question-repositories.js'
import { right } from '@/core/either.js'

export class CreateQuestionUseCase {
  constructor(private questionRepository: QuestionsRepository) {}

  async execute({
    authorId,
    title,
    content,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      title,
      content,
    })

    await this.questionRepository.create(question)

    return right({
      question,
    })
  }
}

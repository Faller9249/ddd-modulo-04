import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import { Answer } from '../../enterprise/entities/answer.js'
import type { AnswersRepository } from '../repositories/answer-repositories.js'
import type {
  AnswerQuestionUseCaseRequest,
  AnswerQuestionUseCaseResponse,
} from '../../../../@types/@entities.model.js'

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answerRepository.create(answer)

    return {
      answer,
    }
  }
}

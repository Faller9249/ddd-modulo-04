import type { AnswerCommentsRepository } from '../repositories/answer-comments-repositories.js'
import type {
  FetchAnswerCommentsUseCaseRequest,
  FetchAnswerCommentsUseCaseResponse,
} from '@/@types/@entities.model.js'
import { right } from '@/core/either.js'

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    answerId,
    page,
  }: FetchAnswerCommentsUseCaseRequest): Promise<FetchAnswerCommentsUseCaseResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(answerId, {
        page,
      })

    return right({
      answerComments,
    })
  }
}

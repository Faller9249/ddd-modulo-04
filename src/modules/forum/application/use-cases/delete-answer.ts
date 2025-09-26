import type {
  DeleteAnswerUseCaseRequest,
  DeleteAnswerUseCaseResponse,
} from '@/@types/@entities.model.js'
import type { AnswersRepository } from '../repositories/answer-repositories.js'
import { left, right } from '@/core/either.js'
import { NotAllowedError } from '@/core/errors/not-allowed-error.js'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error.js'

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== answer.authorId.toString()) {
      return left(new NotAllowedError())
    }

    await this.answersRepository.delete(answer)

    return right({})
  }
}

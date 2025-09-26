import { left, right } from '@/core/either.js'

import type { AnswerCommentsRepository } from '@/modules/forum/application/repositories/answer-comments-repositories.js'

import type {
  DeleteAnswerCommentUseCaseRequest,
  DeleteAnswerCommentUseCaseResponse,
} from '@/@types/@entities.model.js'

import { ResourceNotFoundError } from '@/modules/forum/application/use-cases/errors/resource-not-found-error.js'
import { NotAllowedError } from '@/modules/forum/application/use-cases/errors/not-allowed-error.js'

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId)

    if (!answerComment) {
      return left(new ResourceNotFoundError())
    }

    if (answerComment.authorId.toString() !== authorId) {
      return left(new NotAllowedError())
    }

    await this.answerCommentsRepository.delete(answerComment)

    return right({})
  }
}

import type { QuestionCommentsRepository } from '@/modules/forum/application/repositories/question-comments-repository.js'

import type {
  DeleteQuestionCommentUseCaseRequest,
  DeleteQuestionCommentUseCaseResponse,
} from '@/@types/@entities.model.js'
import { left, right } from '@/core/either.js'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error.js'
import { NotAllowedError } from '@/core/errors/not-allowed-error.js'

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentsRepository.findById(questionCommentId)

    if (!questionComment) {
      return left(new ResourceNotFoundError())
    }

    if (questionComment.authorId.toString() !== authorId) {
      return left(new NotAllowedError())
    }

    await this.questionCommentsRepository.delete(questionComment)

    return right({})
  }
}

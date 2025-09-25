import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import { AnswerComment } from '../../enterprise/entities/answer-comment.js'
import type { AnswerCommentsRepository } from '../repositories/answer-comments-repositories.js'
import type { AnswersRepository } from '../repositories/answer-repositories.js'

import type {
  CommentOnAnswerUseCaseRequest,
  CommentOnAnswerUseCaseResponse,
} from '@/@types/@entities.model.js'
import { left, right } from '@/core/either.js'
import { ResourceNotFoundError } from './errors/resource-not-found-error.js'

export class CommentOnAnswerUseCase {
  constructor(
    private answersRepository: AnswersRepository,
    private answerCommentsRepository: AnswerCommentsRepository,
  ) {}

  async execute({
    authorId,
    answerId,
    content,
  }: CommentOnAnswerUseCaseRequest): Promise<CommentOnAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    const answerComment = AnswerComment.create({
      authorId: new UniqueEntityID(authorId),
      answerId: new UniqueEntityID(answerId),
      content,
    })

    await this.answerCommentsRepository.create(answerComment)

    return right({
      answerComment,
    })
  }
}

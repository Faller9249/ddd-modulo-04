import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import { QuestionComment } from '../../enterprise/entities/question-comment.js'
import type { QuestionsRepository } from '../repositories/question-repositories.js'
import type { QuestionCommentsRepository } from '../repositories/question-comments-repository.js'

import type {
  CommentOnQuestionUseCaseRequest,
  CommentOnQuestionUseCaseResponse,
} from '@/@types/@entities.model.js'
import { left, right } from '@/core/either.js'
import { ResourceNotFoundError } from './errors/resource-not-found-error.js'

export class CommentOnQuestionUseCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private questionCommentsRepository: QuestionCommentsRepository,
  ) {}

  async execute({
    authorId,
    questionId,
    content,
  }: CommentOnQuestionUseCaseRequest): Promise<CommentOnQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityID(authorId),
      questionId: new UniqueEntityID(questionId),
      content,
    })

    await this.questionCommentsRepository.create(questionComment)

    return right({
      questionComment,
    })
  }
}

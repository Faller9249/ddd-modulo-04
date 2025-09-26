import type {
  FetchQuestionCommentsUseCaseRequest,
  FetchQuestionCommentsUseCaseResponse,
} from '@/@types/@entities.model.js'
import type { QuestionComment } from '../../enterprise/entities/question-comment.js'
import type { QuestionCommentsRepository } from '../repositories/question-comments-repository.js'
import { right } from '@/core/either.js'

export class FetchQuestionCommentsUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseResponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(questionId, {
        page,
      })

    return right({
      questionComments,
    })
  }
}

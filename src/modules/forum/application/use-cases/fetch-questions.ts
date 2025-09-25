import type {
  FetchQuestionAnswersUseCaseRequest,
  FetchQuestionAnswersUseCaseResponse,
} from '@/@types/@entities.model.js'
import type { AnswersRepository } from '../repositories/answer-repositories.js'
export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQTopicId(questionId)

    return {
      answers,
    }
  }
}

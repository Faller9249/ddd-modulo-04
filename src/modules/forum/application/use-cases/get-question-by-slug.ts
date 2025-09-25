import type {
  GetQuestionBySlugUseCaseRequest,
  GetQuestionBySlugUseCaseResponse,
} from '../../../../@types/@entities.model.js'
import type { QuestionsRepository } from '../repositories/question-repositories.js'

export class GetQuestionBySlugUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    slug,
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findBySlug(slug)

    if (!question) {
      throw new Error('Question not found.')
    }

    return {
      question,
    }
  }
}

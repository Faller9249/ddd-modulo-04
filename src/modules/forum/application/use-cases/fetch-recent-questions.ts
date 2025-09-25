import type {
  FetchRecentQuestionsUseCaseRequest,
  FetchRecentQuestionsUseCaseResponse,
} from '@/@types/@entities.model.js'
import type { QuestionsRepository } from '../repositories/question-repositories.js'
import { right } from '@/core/either.js'

export class FetchRecentQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionsUseCaseRequest): Promise<FetchRecentQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return right({
      questions,
    })
  }
}

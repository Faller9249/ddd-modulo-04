import type { Answer } from '../../enterprise/entities/answer.js'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
}

export interface CreateRepositories {
  create(answer: Answer): Promise<void>
}

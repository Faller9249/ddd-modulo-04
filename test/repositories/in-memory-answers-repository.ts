import type { AnswersRepository } from '@/modules/forum/application/repositories/answer-repositories.js'
import type { Answer } from '@/modules/forum/enterprise/entities/answer.js'

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
}

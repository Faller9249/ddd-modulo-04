import type { PaginationParams } from '@/core/repository/pagination-params.js'
import type { AnswersRepository } from '@/modules/forum/application/repositories/answer-repositories.js'
import type { Answer } from '@/modules/forum/enterprise/entities/answer.js'

export class InMemoryAnswersRepository implements AnswersRepository {
  async findManyByQTopicId(params: PaginationParams): Promise<Answer[]> {
    const answers = this.items
      .filter((item) => item.questionId.toString() === )
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  async findById(id: string) {
    const answer = this.items.find((item) => item.id.toString() === id)

    if (!answer) {
      return null
    }

    return answer
  }

  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }

  async save(answer: Answer) {
    const itemIndex = this.items.findIndex((item) => item.id === answer.id)

    this.items[itemIndex] = answer
  }

  async delete(answer: Answer) {
    const itemIndex = this.items.findIndex((item) => item.id === answer.id)

    this.items.splice(itemIndex, 1)
  }
}

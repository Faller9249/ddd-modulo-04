import type { QuestionsRepository } from '@/modules/forum/application/repositories/question-repositories.js'
import type { Question } from '@/modules/forum/enterprise/entities/question.js'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Question[] = []

  async findBySlug(slug: string) {
    const question = this.items.find((item) => item.slug.value === slug)

    if (!question) {
      return null
    }

    return question
  }

  async create(question: Question) {
    this.items.push(question)
  }
}

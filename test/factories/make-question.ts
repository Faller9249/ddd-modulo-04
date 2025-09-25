import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import type { QuestionProps } from '@/@types/@entities.model.js'
import { Question } from '@/modules/forum/enterprise/entities/question.js'
export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityID,
) {
  const question = Question.create(
    {
      authorId: new UniqueEntityID(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return question
}

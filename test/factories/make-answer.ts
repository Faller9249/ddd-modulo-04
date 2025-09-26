import type { AnswerProps } from '@/@types/@entities.model.js'
import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import { Answer } from '@/modules/forum/enterprise/entities/answer.js'
import { faker } from '@faker-js/faker'

export function makeAnswer(
  override: Partial<AnswerProps> = {},
  id?: UniqueEntityID,
) {
  const answer = Answer.create(
    {
      authorId: new UniqueEntityID(),
      questionId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answer
}

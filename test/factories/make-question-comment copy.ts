import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'

import {
  AnswerComment,
  type AnswerCommentProps,
} from '@/modules/forum/enterprise/entities/answer-comment.js'

export function makeAnswerComment(
  override: Partial<AnswerCommentProps> = {},
  id?: UniqueEntityID,
) {
  const answer = AnswerComment.create(
    {
      authorId: new UniqueEntityID(),
      answerId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answer
}

import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'

import {
  QuestionComment,
  type QuestionCommentProps,
} from '@/modules/forum/enterprise/entities/question-comment.js'

export function makeQuestionComment(
  override: Partial<QuestionCommentProps> = {},
  id?: UniqueEntityID,
) {
  const question = QuestionComment.create(
    {
      authorId: new UniqueEntityID(),
      questionId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return question
}

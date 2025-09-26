import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import {
  QuestionAttachment,
  type QuestionAttachmentProps,
} from '@/modules/forum/enterprise/entities/question-attachment.js'

export function makeQuestionAttachment(
  override: Partial<QuestionAttachmentProps> = {},
  id?: UniqueEntityID,
) {
  const questionAttachment = QuestionAttachment.create(
    {
      questionId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return questionAttachment
}

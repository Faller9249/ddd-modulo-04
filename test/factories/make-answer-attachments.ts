import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import {
  type AnswerAttachmentProps,
  AnswerAttachment,
} from '@/modules/forum/enterprise/entities/answer-attachment.js'

export function makeAnswerAttachment(
  override: Partial<AnswerAttachmentProps> = {},
  id?: UniqueEntityID,
) {
  const answerAttachment = AnswerAttachment.create(
    {
      answerId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return answerAttachment
}

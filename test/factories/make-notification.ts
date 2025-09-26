import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import {
  Notification,
  type NotificationProps,
} from '@/modules/notification/enterprise/entities/notification.js'

export function makeNotification(
  override: Partial<NotificationProps> = {},
  id?: UniqueEntityID,
) {
  const notification = Notification.create(
    {
      recipientId: new UniqueEntityID(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
      createdAt: new Date(), // valor padrão
      ...override, // override sempre ganha
    },
    id,
  )

  return notification
}

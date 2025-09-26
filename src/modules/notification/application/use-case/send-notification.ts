import { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import { right } from '@/core/either.js'
import { Notification } from '../../enterprise/entities/notification.js'
import type { NotificationsRepository } from '../repositories/notification-repositories.js'
import type {
  SendNotificationUseCaseRequest,
  SendNotificationUseCaseResponse,
} from './use-case.model.js'

export class SendNotificationUseCase {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute({
    recipientId,
    title,
    content,
  }: SendNotificationUseCaseRequest): Promise<SendNotificationUseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityID(recipientId),
      title,
      content,
    })
    await this.notificationRepository.create(notification)

    return right({
      notification,
    })
  }
}

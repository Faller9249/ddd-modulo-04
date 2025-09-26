import { left, right } from '@/core/either.js'
import type { NotificationsRepository } from '../repositories/notification-repositories.js'
import type {
  ReadNotificationUseCaseRequest,
  ReadNotificationUseCaseResponse,
} from './use-case.model.js'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error.js'
import { NotAllowedError } from '@/core/errors/not-allowed-error.js'

export class ReadNotificationUseCase {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute({
    recipientId,
    notificationId,
  }: ReadNotificationUseCaseRequest): Promise<ReadNotificationUseCaseResponse> {
    const notification =
      await this.notificationRepository.findById(notificationId)

    if (!notification) {
      return left(new ResourceNotFoundError())
    }

    if (recipientId !== notification.recipientId.toString()) {
      return left(new NotAllowedError())
    }

    notification.read()

    await this.notificationRepository.save(notification)

    return right({
      notification,
    })
  }
}

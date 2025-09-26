import type { Either } from '@/core/either.js'
import { Notification } from '../../enterprise/entities/notification.js'
import type { ResourceNotFoundError } from '@/core/errors/resource-not-found-error.js'
import type { NotAllowedError } from '@/core/errors/not-allowed-error.js'

export interface SendNotificationUseCaseRequest {
  recipientId: string
  title: string
  content: string
}

export type SendNotificationUseCaseResponse = Either<
  null,
  {
    notification: Notification
  }
>

export interface ReadNotificationUseCaseRequest {
  recipientId: string
  notificationId: string
}

export type ReadNotificationUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    notification: Notification
  }
>

import type { NotificationsRepository } from '@/modules/notification/application/repositories/notification-repositories.js'
import type { Notification } from '@/modules/notification/enterprise/entities/notification.js'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public items: Notification[] = []

  async findById(id: string) {
    const notificationComment = this.items.find(
      (item) => item.id.toString() === id,
    )

    if (!notificationComment) {
      return null
    }

    return notificationComment
  }

  async create(notification: Notification) {
    this.items.push(notification)
  }

  async save(notification: Notification) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === notification.id,
    )

    this.items[itemIndex] = notification

    //  DomainEvents.dispatchEventsForAggregate(notification.id)
  }
}

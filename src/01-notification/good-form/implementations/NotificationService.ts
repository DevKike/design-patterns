import { INotificationService } from '../definitions/INotificationService';
import { INotifier } from '../definitions/INotifier';
import { NotificationFactory, NotifierType } from './NotificationFactory';

export class NotificationService implements INotificationService {
  private readonly _notifier: INotifier;

  constructor(notifierType: NotifierType) {
    this._notifier = NotificationFactory.createNotifier(notifierType);
  }

  notify(message: string): void {
    this._notifier.sendNotification(message);
  }
}

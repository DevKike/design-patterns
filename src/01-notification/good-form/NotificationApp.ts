import { INotificationService } from './definitions/INotificationService';
import { NotifierEnum } from './implementations/NotificationFactory';
import { NotificationService } from './implementations/NotificationService';

export class NotificationApp {
  private _message: string;
  private _notificationService: INotificationService;

  constructor(message: string, notifier: NotifierEnum) {
    this._notificationService = new NotificationService(notifier);
    this._message = message;
  }

  init() {
    this._notificationService.notify(this._message);
  }
}

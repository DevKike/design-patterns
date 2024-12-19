import { EmailNotifier } from "./EmailNotifier";

export class NotificationService {
  private _notifier: EmailNotifier;

  constructor() {
    this._notifier = new EmailNotifier();
  }

  notify(message: string): void {
    this._notifier.sendNotifications(message);
  }
}

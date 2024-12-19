import { INotifier } from '../definitions/INotifier';
import { EmailNotifier } from '../implementations/EmailNotifier';
import { SMSNotifier } from '../implementations/SMSNotifier';
import { PushNotifier } from '../implementations/PushNotifier';

export class NotificationFactory {
  static createNotifier(type: NotifierType): INotifier {
    switch (type.toLowerCase()) {
      case NotifierEnum.EMAIL:
        return new EmailNotifier();
      case NotifierEnum.SMS:
        return new SMSNotifier();
      case NotifierEnum.PUSH:
        return new PushNotifier();
      default:
        throw new Error(`Notifier type ${type} is not supported`);
    }
  }
}

export type NotifierType = 'email' | 'sms' | 'push';
export enum NotifierEnum {
  EMAIL = 'email',
  SMS = 'sms',
  PUSH = 'push',
}

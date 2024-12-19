import { INotifier } from '../definitions/INotifier';

export class PushNotifier implements INotifier {
  sendNotification(message: string): void {
    console.log('Sending push notification with message:', message);
  }
}

import { INotifier } from '../definitions/INotifier';

export class EmailNotifier implements INotifier {
  sendNotification(message: string): void {
    console.log(`Sending notification with message: ${message} from email!`);
  }
}

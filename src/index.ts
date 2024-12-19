import { NotifierEnum } from './01-notification/good-form/implementations/NotificationFactory';
import { NotificationApp } from './01-notification/good-form/NotificationApp';

export class Index {
  static chooseExample(example: ExampleType): void {
    switch (example) {
      case 'notification':
        return new NotificationApp('hi', NotifierEnum.PUSH).init();
      default:
        throw new Error('Example is not supported');
    }
  }
}

Index.chooseExample('notification');

type ExampleType = 'notification';

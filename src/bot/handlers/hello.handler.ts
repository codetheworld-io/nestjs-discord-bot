import { BaseHandler } from './base.handler';
import { MessageHandler } from '../bot.decorator';

@MessageHandler('hello')
export class HelloHandler extends BaseHandler {
  process(): string {
    const hour = new Date().getHours();
    if (hour > 12) {
      return 'Good afternoon!';
    }

    if (hour > 18) {
      return 'Good evening';
    }

    return 'Good morning';
  }
}

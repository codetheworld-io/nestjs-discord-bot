import { BaseHandler } from './base.handler';
import { MessageHandler } from '../bot.decorator';

@MessageHandler('time')
export class TimeHandler extends BaseHandler {
  process(): string {
    return new Date().toDateString();
  }
}

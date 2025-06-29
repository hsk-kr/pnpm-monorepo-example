import { Injectable } from '@nestjs/common';
import { languages } from 'shared';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLanguages() {
    return languages;
  }
}

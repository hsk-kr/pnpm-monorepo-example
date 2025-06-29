import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Language } from 'shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('languages')
  getLanguages(): Language[] {
    return this.appService.getLanguages();
  }
}

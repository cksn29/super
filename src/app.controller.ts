import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataDto } from '../sub/src/dto/data.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): DataDto {
    return this.appService.getHello();
  }
}

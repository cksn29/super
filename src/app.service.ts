import { Injectable } from '@nestjs/common';
import { DataDto } from '../sub/src/dto/data.dto';

@Injectable()
export class AppService {
  getHello(): DataDto {
    return {
      id: 1,
      type: 'hello',
      message: 'Hello',
    };
  }
}

import { Injectable } from '@nestjs/common';
import { DataDto } from '../sub/src/dto/data.dto';

@Injectable()
export class AppService {
  getHello(): DataDto {
    return {
      id: 2,
      type: 'hello',
      message: 'Hello',
      sub: true,
      sub2: true,
      super: true,
    };
  }
}

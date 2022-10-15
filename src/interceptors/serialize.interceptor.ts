import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { UserDto } from '../users/dtos/user.dto';

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    console.log('Running before controller');
    return handler.handle().pipe(
      map((data: any) => {
        // Run after controller
        return plainToClass(
          UserDto,
          { data },
          {
            excludeExtraneousValues: true,
          },
        );
      }),
    );
  }
}

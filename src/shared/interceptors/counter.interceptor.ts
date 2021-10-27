import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class CounterInterceptor implements NestInterceptor {
  private count = 0;

  intercept(context: ExecutionContext, next: CallHandler): Observable<CallHandler> {
    return next
      .handle()
      .pipe(
        tap(() => this.count++),
      );
  }
}

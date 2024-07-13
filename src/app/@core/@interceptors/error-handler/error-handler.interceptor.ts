import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '@shared/@services/auth/auth.service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  private authService = inject(AuthService)

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
      .pipe(
        catchError((error) => {

          if (error instanceof HttpErrorResponse) {

            if (error.status === HttpStatusCode.Unauthorized) {
              this.authService.kickOut();
            }
          }

          return throwError(() => {
            let _error = error.error || error;
            return _error;
          })
        })
      )
  }
}

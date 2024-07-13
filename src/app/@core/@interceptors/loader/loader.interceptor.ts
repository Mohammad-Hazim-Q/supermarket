import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LayoutService } from '@base/@main/layout/service/layout.service';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private _counter = 0;
  private _layoutService = inject(LayoutService)

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!this._counter)
      this._layoutService.toggleLoader(true);

    this._counter++;

    return next.handle(request)
      .pipe(
        finalize(() => {
          this._counter--;

          if (this._counter == 0) {
            this._layoutService.toggleLoader(false);
          }

        })
      )
  }
}

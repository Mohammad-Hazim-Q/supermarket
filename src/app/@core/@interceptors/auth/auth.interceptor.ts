import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private translate = inject(TranslateService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token = localStorage.getItem('access-token')!;

    let _headers = {
      "Authorization": 'Bearer ' + token,
      'Accept': 'application/json',
      'Accept-Language': this.translate.currentLang || environment.defaultLanguage || 'en'
    }

    const _request = request.clone({
      setHeaders: _headers
    })

    return next.handle(_request);
  }
}

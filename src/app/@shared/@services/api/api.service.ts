import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';

interface APIData {
  [key: string]: any
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);

  get<T = any>(path: string, _params: APIData = {}) {

    let sanitizedQueryParams = this._sanitizeQueryParams(_params);

    let httpParams: HttpParams = new HttpParams({ fromObject: sanitizedQueryParams });
    return this._http.get<T>(
      environment.apiUrl + path,
      {
        params: httpParams
      }
    )
  }

  post<T = any>(path: string, body: APIData) {
    return this._http.post<T>(
      environment.apiUrl + path,
      body
    )
  }

  delete<T = any>(path: string, body: APIData = {}) {
    return this._http.delete<T>(
      environment.apiUrl + path,
      {
        body
      }
    )
  }

  patch<T = any>(path: string, body: APIData = {}) {
    return this._http.patch<T>(
      environment.apiUrl + path,
      body
    )
  }

  put<T = any>(path: string, body: APIData = {}) {
    return this._http.put<T>(
      environment.apiUrl + path,
      body
    )
  }

  // Clean Object from falsy values.
  private _sanitizeQueryParams(params: APIData) {

    for (const param of Object.keys(params)) {
      let value = params[param];

      if (value == undefined || value == null || value == '') delete params[param];
    }

    return params;
  }

}

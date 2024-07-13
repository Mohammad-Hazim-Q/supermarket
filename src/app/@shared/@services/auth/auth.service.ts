import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from "crypto-js";
import { environment } from 'environments/environment';
import { ApiService } from '../api/api.service';
import { LoginResponse, SystemUser } from '../types/auth.type';
import { SuccessResponse } from '../types/shared.types';
// import { UserRole, UserType } from '@main/@base/@pages/users/types/user.type';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _path = 'auth'
  private _router = inject(Router);
  private _apiService = inject(ApiService);

  currentUser: SystemUser | null = null;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  getLoggedInUser() {
    return this._apiService.post<SystemUser>(this._path + '/me', {})
  }

  login(data: {
    email: string;
    password: string;
  }) {

    return this._apiService.post<LoginResponse>(this._path + '/login', {
      email: data.email,
      password: data.password
    })
  }


  setPassword(data: {
    token: string;
    password: string;
  }) {

    return this._apiService.put<SuccessResponse>(this._path + '/set-password', {
      token: data.token,
      password: this.encrypt(data.password)
    })
  }

  forgotPassword(email: string) {

    return this._apiService.post<SuccessResponse>(this._path + '/forget-password', {
      email: this.encrypt(email)
    })
  }

  setAccessToken(token: string) {
    localStorage.setItem('access-token', token)
  }

  clearLocalStorageData() {
    localStorage.clear();
  }

  encrypt(dataToEncrypt: string) {
    return CryptoJS.AES.encrypt(dataToEncrypt, environment.secretKey).toString();
  }

  decrypt(str: string) {
    // let data = CryptoJS.AES.decrypt(str, environment.secretKey).toString(CryptoJS.enc.Utf8);
    // return data;
  }


  kickOut() { // Just kidding
    localStorage.removeItem('access-token')
    this._router.navigateByUrl('external/login');
    this.currentUser = null;
  }
}

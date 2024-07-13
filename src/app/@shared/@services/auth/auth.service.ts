import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from "crypto-js";
import { environment } from 'environments/environment';
import { ApiService } from '../api/api.service';
import { LoginResponse, SystemUser } from '../types/auth.type';
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

  get hasToken(): boolean {
    return !!localStorage.getItem('access-token');
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


  signUp(data: {
    email: string;
    password: string;
    name: string;
  }) {

    return this._apiService.post<LoginResponse>(this._path + '/signup', {
      email: data.email,
      password: data.password,
      name: data.name,
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
    this.currentUser = null;
  }
}

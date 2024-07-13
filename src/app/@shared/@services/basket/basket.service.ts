import { Injectable, inject } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Basket, Product } from '../types/shared.types';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private _path = 'basket'
  private _apiService = inject(ApiService);

  getBasket() {
    return this._apiService.get<{ basket: Basket[] }>(this._path + '/')
  }

  addToBasket(product: Product) {
    return this._apiService.post<{ count: number }>(this._path + '/', product)
  }

  deleteItem(id: number) {
    return this._apiService.delete<{ count: number }>(this._path + '/', { id });
  }
}

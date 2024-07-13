import { Injectable, inject } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Category, Product } from '../types/shared.types';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  private _path = 'lookup'
  private _apiService = inject(ApiService);

  getCategories() {
    return this._apiService.get<{ categories: Category[] }>(this._path + '/category')
  }

  getCategoryProducts(categoryId?: string) {
    return this._apiService.get<{ products: Product[] }>(this._path + '/product', {
      categoryId
    })
  }

  getRandomProducts() {
    return this._apiService.get<{ products: Product[] }>(this._path + '/random')
  }
}

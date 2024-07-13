import { Component, inject } from '@angular/core';
import { BaseComponent } from '@shared/@components/base.component';
import { LookupService } from '@shared/@services/lookup/lookup.service';
import { Product } from '@shared/@services/types/shared.types';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent {


  private _lookupService = inject(LookupService)

  products$!: Observable<Product[]>;
  categoryId?: string;
  constructor() {
    super();

    this.categoryId = this.activatedRoute.snapshot.queryParams['categoryId'];
  }

  ngOnInit(): void {
    this._getProducts();
  }

  private _getProducts() {


    this.products$ = this._lookupService.getCategoryProducts(this.categoryId)
      .pipe(map(res => res.products))
  }
}

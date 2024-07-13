import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '@shared/@components/base.component';
import { LookupService } from '@shared/@services/lookup/lookup.service';
import { MessageService } from '@shared/@services/messages/message.service';
import { Category, Product } from '@shared/@services/types/shared.types';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  private _lookupService = inject(LookupService)
  private _messageService = inject(MessageService)

  categories$!: Observable<Category[]>;
  randomProducts$!: Observable<Product[]>;

  ngOnInit(): void {
    this._getCategories();
    this._getRandomProducts();

  }

  private _getCategories() {
    this.categories$ = this._lookupService.getCategories()
      .pipe(map(res => res.categories))
  }

  private _getRandomProducts() {
    this.randomProducts$ = this._lookupService.getRandomProducts()
      .pipe(map(res => res.products))
  }


  navigateToProducts(categoryId: number) {
    this.router.navigate(['/main/products'], { queryParams: { categoryId } });
  }

}

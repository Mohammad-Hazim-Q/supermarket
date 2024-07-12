import { Component } from '@angular/core';
import { BaseComponent } from '@shared/@components/base.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent {

  constructor() {
    super();
  }
}

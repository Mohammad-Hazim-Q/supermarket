import { Component, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '@base/@external/login/login.component';
import { AuthService } from '@shared/@services/auth/auth.service';
import { Product } from '@shared/@services/types/shared.types';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent extends BaseComponent {

  @Input({ required: true }) product!: Product;

  private _dialog = inject(MatDialog)
  private _authService = inject(AuthService)

  constructor() {
    super();
  }


  addToBasket() {
    if (!this._authService.isLoggedIn) {
      this.openLoginDialog();
      return;
    }



  }

  openLoginDialog() {
    this._dialog.open(LoginComponent);
  }

}

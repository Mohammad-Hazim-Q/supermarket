import { Component, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '@base/@external/login/login.component';
import { LayoutService } from '@base/@main/layout/service/layout.service';
import { AuthService } from '@shared/@services/auth/auth.service';
import { BasketService } from '@shared/@services/basket/basket.service';
import { MessageService } from '@shared/@services/messages/message.service';
import { Product } from '@shared/@services/types/shared.types';
import { takeUntil } from 'rxjs';
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
  private _basketService = inject(BasketService)
  private _messageService = inject(MessageService)
  private _layoutService = inject(LayoutService)

  constructor() {
    super();
  }


  addToBasket(product: Product) {
    if (!this._authService.isLoggedIn) {
      this.openLoginDialog();
      return;
    }

    this._basketService.addToBasket(product)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this._messageService.showSuccess();

          this._layoutService.updateBasketCount(res.count);
        },
        error: () => {
          this._messageService.showError();
        }
      })
  }

  openLoginDialog() {
    this._dialog.open(LoginComponent);
  }

}

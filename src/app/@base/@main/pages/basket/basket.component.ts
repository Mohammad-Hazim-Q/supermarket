import { Component, OnInit, inject } from '@angular/core';
import { LayoutService } from '@base/@main/layout/service/layout.service';
import { BaseComponent } from '@shared/@components/base.component';
import { BasketService } from '@shared/@services/basket/basket.service';
import { MessageService } from '@shared/@services/messages/message.service';
import { Basket } from '@shared/@services/types/shared.types';
import { Observable, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent extends BaseComponent implements OnInit {

  private _basketService = inject(BasketService);
  private _messageService = inject(MessageService);
  private _layoutService = inject(LayoutService);

  basket$!: Observable<Basket[]>;

  ngOnInit(): void {

    this.getUserBasket();
  }

  getUserBasket() {
    this.basket$ = this._basketService.getBasket()
      .pipe(map(res => res.basket))
  }


  deleteItem(id: number) {
    this._basketService.deleteItem(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this._messageService.showSuccess()
          this.getUserBasket();
          this._layoutService.updateBasketCount(res.count)
        },
        error: () => {
          this._messageService.showError();
        }
      })
  }

}

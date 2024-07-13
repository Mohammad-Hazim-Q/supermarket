import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { LoginComponent } from '@base/@external/login/login.component';
import { BaseComponent } from '@shared/@components/base.component';
import { AuthService } from '@shared/@services/auth/auth.service';
import { BasketService } from '@shared/@services/basket/basket.service';
import { Observable } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { LayoutService } from './service/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends BaseComponent implements OnInit, AfterContentChecked {


  @ViewChild('leftDrawer') leftDrawer!: MatDrawer;
  @ViewChild('rightDrawer') rightDrawer!: MatDrawer;

  private _layoutService = inject(LayoutService);
  private _authService = inject(AuthService);
  private _changeDetector = inject(ChangeDetectorRef);
  private _breakpointObserver = inject(BreakpointObserver);
  private _basketService = inject(BasketService);
  private _dialog = inject(MatDialog);

  httpLoader$ = this._layoutService.httpLoader$;
  basketItemsCount$: Observable<string>;

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor() {
    super();

    this.basketItemsCount$ = this._layoutService.basketItemsCount$
      .pipe(
        map(count => {
          return count > 99 ? '99+' : count.toString();
        })
      )
  }


  get userFullName() {
    return this._authService.currentUser?.name || '';
  }

  private _listenToChanges() {

    this._layoutService.rightDrawer$.asObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (payload) => {
          this.rightDrawer.toggle();
        }
      })
  }

  ngOnInit(): void {
    this._listenToChanges();
    this.getBasketCount();
  }

  ngAfterContentChecked(): void {
    this._changeDetector.detectChanges();
  }

  switchLanguage(lang: string) {
    this.leftDrawer.close();
    this.systemService.switchSystemLanguage(lang);
  }

  getBasketCount() {
    this._basketService.getBasket()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (basket) => {
          this._layoutService.updateBasketCount(basket.basket.length || 0);
        },
        error: () => {
          this._layoutService.updateBasketCount(0);
        }
      })

  }


  openBasket() {

    if (!this._authService.isLoggedIn) {
      this.openLoginDialog();

      return;
    }

    this.rightDrawer.open();
  }

  openLoginDialog() {
    this._dialog.open(LoginComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.getBasketCount()
        }
      })
  }

  logout() {
    this._authService.kickOut();
    this._layoutService.updateBasketCount(0)
  }
}

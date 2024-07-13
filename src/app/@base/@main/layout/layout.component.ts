import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BaseComponent } from '@shared/@components/base.component';
import { AuthService } from '@shared/@services/auth/auth.service';
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

  httpLoader$ = this._layoutService.httpLoader$;
  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor() {
    super();
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
  }

  ngAfterContentChecked(): void {
    this._changeDetector.detectChanges();
  }

  switchLanguage(lang: string) {
    this.leftDrawer.close();
    this.systemService.switchSystemLanguage(lang);
  }

  logout() {
    this._authService.kickOut();
  }
}

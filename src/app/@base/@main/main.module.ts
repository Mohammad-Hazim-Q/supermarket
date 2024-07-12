import { BidiModule } from '@angular/cdk/bidi';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CoreModule } from '@core/core.module';
import { AvatarModule } from 'ngx-avatars';
import { LayoutComponent } from './layout/layout.component';
import { RightDrawerContainerComponent } from './layout/right-drawer-container/right-drawer-container.component';
import { MainRoutingModule } from './main-routing.module';
import { BasketComponent } from './pages/basket/basket.component';


@NgModule({
  declarations: [
    LayoutComponent,
    RightDrawerContainerComponent,
    BasketComponent
  ],
  imports: [
    MainRoutingModule,
    CoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    BidiModule,
    MatProgressBarModule,
    MatBadgeModule,
    AvatarModule,
  ]
})
export class MainModule { }

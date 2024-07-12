import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { CoreModule } from '@core/core.module';
import { ComponentsModule } from '@shared/@components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CoreModule,
    HomeRoutingModule,
    MatButtonModule,
    ComponentsModule,
  ]
})
export class HomeModule { }

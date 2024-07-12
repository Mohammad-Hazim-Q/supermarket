import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { ComponentsModule } from '@shared/@components/components.module';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CoreModule,
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: '', component: ProductsComponent },
    ])
  ]
})
export class ProductsModule { }

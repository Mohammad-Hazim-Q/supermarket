import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { CategoryWrapperComponent } from './category-wrapper/category-wrapper.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    CategoryWrapperComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule
  ],
  exports: [
    CategoryWrapperComponent,
    ProductCardComponent
  ]
})
export class ComponentsModule { }

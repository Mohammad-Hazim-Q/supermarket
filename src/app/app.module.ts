import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleStrategy } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PageTitleStrategy } from '@services/title/page-title.strategy';
import { AvatarModule } from 'ngx-avatars';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,

    NgxSkeletonLoaderModule.forRoot({ animation: "progress" }),
    AvatarModule.forRoot({
      colors: ['#001041', '#04c4ad', '#58a8af', '#bf98e7', '#4028a0']
    }),
    TranslateModule.forRoot(),
  ],
  providers: [
    MatSnackBarModule,
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

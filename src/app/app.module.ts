import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerCardapioComponent } from './banner-cardapio/banner-cardapio.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerCardapioComponent,
    FoodMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

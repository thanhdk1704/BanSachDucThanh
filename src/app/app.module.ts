import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { DsspComponent } from './sanpham/dssp/dssp.component';
import {ChitietspComponent} from './sanpham/chitietsp/chitietsp.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    // NotfoundComponent,
    SanphamComponent,
    // DsspComponent,
    // ChitietspComponent,
    // CartComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SanphamComponent} from './sanpham.component';
import {ChitietspComponent} from './chitietsp/chitietsp.component';
import {DsspComponent} from './dssp/dssp.component';


@NgModule({
  declarations: [
    SanphamComponent,
    ChitietspComponent,
    DsspComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class SanphamModule { }

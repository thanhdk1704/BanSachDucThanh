import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',component:SanphamComponent},
  {path:'cart',component:CartComponent},
  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

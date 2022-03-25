import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';
import {FruitsandveggiesComponent} from './fruitsandveggies/fruitsandveggies.component';
import {GroceryComponent} from './grocery/grocery.component';
import {SignupComponent} from './signup/signup.component';
import {AccountComponent} from './account/account.component';
import {AccountsuccessPageComponent} from './accountsuccess-page/accountsuccess-page.component';
import {PlaceorderComponent} from './placeorder/placeorder.component';
//import {RouterComponent} from './signup/signup.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"home/:id",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"fruitsandveggies",component:FruitsandveggiesComponent},
  {path:"grocery",component:GroceryComponent},
  {path:"cart",component:CartComponent},
  {path:"signup",component:SignupComponent},
  {path:"account",component:AccountComponent},
  {path:"accountsuccess-page",component:AccountsuccessPageComponent},
  {path:"placeorder",component:PlaceorderComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
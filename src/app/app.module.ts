import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartService } from './cartservices.service';
import { FruitsandveggiesComponent } from './fruitsandveggies/fruitsandveggies.component';
import { GroceryComponent } from './grocery/grocery.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { AccountsuccessPageComponent } from './accountsuccess-page/accountsuccess-page.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    CartComponent,
    FruitsandveggiesComponent,
    GroceryComponent,
    CartComponent,
    SignupComponent,
    AccountComponent,
    AccountsuccessPageComponent,
    PlaceorderComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
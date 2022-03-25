import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import {CartService} from '../cartservices.service'
import { Items } from '../items';
@Component({
  selector: 'app-orders',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  fun=true;
  cartItems: Items[] = []
  constructor(private fs:CartService) { }

  ngOnInit(): void {
    this.cartItems = this.fs.getOrders()
     console.log(this.cartItems)
    
  }
  
  delete(id:number){
    this.cartItems = this.cartItems.filter((v, j) => j !== id);
    //this.fun = false;
  }
  
  
  
  

}
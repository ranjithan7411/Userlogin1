import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import {PopularItems} from '../categories1'
import {CartService} from '../cartservices.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  populItems = PopularItems
  filteredItems: Items[] = []
  popItems = [ 
    {
      imgUrl:"",
      names: "Fruits"
    },
    {
      imgUrl:"",
      names:  "Vegetables" 
    },
    {
      imgUrl:"",
      names: "Dairy products" 
    },
    {
      imgUrl:"",
      names: "Grains, Oils & Masala"
    },
    {
      imgUrl:"",
      names: "Snacks"
    },
    {
      imgUrl:"",
      names:  "Biscuits & Cookies" 
    },
    {
      imgUrl:"",
      names:  "Instant Meals" 
    },
    {
      imgUrl:"",
      names:  "Sweets and chocolates"
    },
    {
      imgUrl:"",
      names:  "Personal Care"
    },
    {
      imgUrl:"",
      names:  "Pet Food" 
    },
  ]

  stars=[
    {
      starImg:""
    }
  ]
  constructor(private fs : CartService) { }

  ngOnInit(): void {
  }

  onSelect(item: any):void{
    this.filteredItems = this.populItems.filter(i => i.type == item.names)
  }

  add(item:any){
    this.fs.orderedItem.push(item)
  }
}
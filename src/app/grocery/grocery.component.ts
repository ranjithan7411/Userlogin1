import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import {Grocery} from '../grocery'
import {CartService} from '../cartservices.service'
@Component({
  selector: 'app-home',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  populItems = Grocery
  filteredItems: Items[] = []
  popItems = [
    {
      imgUrl:"",
      names: "Ghee & Oils"
    },
    {
      imgUrl:"",
      names:  "Atta & Flours" //"Briyani"
    },
    {
      imgUrl:"",
      names: "Masala & Spices" //"Fried Rice"
    },
    {
      imgUrl:"",
      names: "Dals & Pulses" //"Fried Rice"
    },
    {
      imgUrl:"",
      names: "Dry fruits, Nuts & Seeds" //"Fried Rice"
    },
    {
      imgUrl:"",
      names: "Sugar, Jaggery & salts" //"Fried Rice"
    }
    
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
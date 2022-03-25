import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import {FruitsAndVeggies} from '../fruitsandveggies'
import {CartService} from '../cartservices.service'
@Component({
  selector: 'app-home',
  templateUrl: './fruitsandveggies.component.html',
  styleUrls: ['./fruitsandveggies.component.css']
})
export class FruitsandveggiesComponent implements OnInit {

  populItems = FruitsAndVeggies
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
      names: "Herbs and Seasonings" //"Fried Rice"
    },
    {
      imgUrl:"",
      names: "Seasonals" //"Fried Rice"
    },
    {
      imgUrl:"",
      names: "Exotic" //"Fried Rice"
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
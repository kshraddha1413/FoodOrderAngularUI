import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  type:string;
  public items = [];
  public subitems = [];
  showTableDataFlag:boolean;


  constructor(private _foodService: FoodService) { }

  ngOnInit() {
    this.showTableDataFlag = false;
    this._foodService.getFoodItemList()
      .subscribe(data => this.items = data);
  }

  onApetizer(){
    this.type='Appetizer';
    this.subitems = [];
    this.getSubArray('Appetizer');
    this.showTableDataFlag =true;
  }

  onLunch(){
    this.type='Lunch';
    this.subitems = [];
    this.getSubArray('Lunch');
    this.showTableDataFlag =true;
  }

  onDinner(){
    this.type='Dinner';
    this.subitems = [];
    this.getSubArray('Dinner');
    this.showTableDataFlag =true;
  }

  getSubArray(type):any{

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].type == type) {
        this.subitems.push(this.items[i]);
        
      }
    }
    
    return this.subitems;
  }

}

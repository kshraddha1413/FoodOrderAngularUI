import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FoodService } from '../../food.service';
import { FoodModel } from '../../model/FoodModel';
import { FoodModelWithId } from '../../model/FoodModelWithId';
import { FormatWidth } from '@angular/common';
import { MessageModel } from '../../model/MessageModel';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  successMessageFlag: boolean;
  duplicateItemFlag: boolean
  showMenuListFlag: boolean;
  showAddNewItemFormFlag: boolean;
  deleteItemMessageFlag: boolean;
  submitButtonFlag: boolean
  updateButtonFlag: boolean
  updateErrorMessageFlag: boolean
  updateSuccessMessageFlag: boolean
  TitleAddOrUpdate: string

  public items = [];


  foodModel: FoodModel;
  foodModelWithId: FoodModelWithId = new FoodModelWithId();
  deleteMessage: MessageModel = new MessageModel();

  constructor(private _foodService: FoodService) { }

  ngOnInit() {

    this.successMessageFlag = false;
    this.duplicateItemFlag = false;
    this.showMenuListFlag = true;
    this.showAddNewItemFormFlag = false;
    this.deleteItemMessageFlag = false
    this.updateErrorMessageFlag = false
    this.updateSuccessMessageFlag = false


    this._foodService.getFoodItemList()
      .subscribe(data => this.items = data);
  }

  onUpdateMenu(){
    this.items = [];
    console.log('aaaa')
    this.ngOnInit();
  }

  types = ['Appetizer', 'Lunch', 'Dinner', 'Beverages', 'Kids','Special','Desserts'];


  OnAddNewItem() {
    this.showMenuListFlag = false;
    this.showAddNewItemFormFlag = true;
    this.successMessageFlag = false;
    this.duplicateItemFlag = false;
    this.deleteItemMessageFlag = false;
    this.submitButtonFlag = true;
    this.updateButtonFlag = false;
    this.updateErrorMessageFlag = false
    this.updateSuccessMessageFlag = false
    this.TitleAddOrUpdate = 'Add New Item'

    this.foodModel = new FoodModel();
  }

  async  onSubmit() {
    let found = false;
    

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == this.foodModel.name) {
        found = true;
       
      }
    }

    if (found) {
      this.duplicateItemFlag = true;
      this.successMessageFlag = false;
      this.showAddNewItemFormFlag = true;
      this.showMenuListFlag = false;
      this.deleteItemMessageFlag = false;
      this.updateErrorMessageFlag = false
      this.updateSuccessMessageFlag = false
    } else {
      this._foodService.postFoodItem(this.foodModel).subscribe(data => this.foodModelWithId = data);
      
     
      await this.delay(3000);
      
      this.items = [];
      this._foodService.getFoodItemList().subscribe(data => this.items = data);
      

      this.duplicateItemFlag = false;
      this.successMessageFlag = true;
      this.showAddNewItemFormFlag = false;
      this.showMenuListFlag = true;
      this.deleteItemMessageFlag = false;
      this.updateErrorMessageFlag = false
      this.updateSuccessMessageFlag = false

    }
  }
  async onUpdate() {
    
    let found = false;
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == this.foodModel.name) {
        found = true;
        this.foodModelWithId.id = this.items[i].id;
        this.foodModelWithId.name = this.items[i].name;
        this.foodModelWithId.type = this.foodModel.type;
        this.foodModelWithId.price = this.foodModel.price;

        
        this._foodService.putFoodItem(this.foodModelWithId).subscribe(data => this.foodModelWithId = data);

        
        await this.delay(3000);
        
        this.items = [];
        this._foodService.getFoodItemList().subscribe(data => this.items = data);

        this.updateErrorMessageFlag = false
        this.updateSuccessMessageFlag = true
        this.showAddNewItemFormFlag = false;
        this.showMenuListFlag = true;
      }
    }
    if (!found) {
      this.updateErrorMessageFlag = true
      this.updateSuccessMessageFlag = false
      this.showAddNewItemFormFlag = true;
      this.showMenuListFlag = false;
    }

  }


  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async OnDeleteItem(selectedItem: FoodModelWithId) {
    this.showMenuListFlag = false;
    this.duplicateItemFlag = false;
    this.successMessageFlag = false;
    this.showAddNewItemFormFlag = false;
    this.showMenuListFlag = false;
    this.deleteItemMessageFlag = false;
    
    
    this._foodService.deleteFoodItem(selectedItem.id).subscribe(data => this.deleteMessage = data);

    
    await this.delay(2000);
    

    this._foodService.getFoodItemList().subscribe(data => this.items = data);
    this.deleteItemMessageFlag = true;
    this.showMenuListFlag = true;
    this.updateErrorMessageFlag = false
    this.updateSuccessMessageFlag = false


  }
  OnUpdateItem(selectedItem: FoodModelWithId) {
    this.showMenuListFlag = false;
    this.showAddNewItemFormFlag = true;
    this.successMessageFlag = false;
    this.duplicateItemFlag = false;
    this.deleteItemMessageFlag = false;
    this.submitButtonFlag = false;
    this.updateButtonFlag = true;

    this.TitleAddOrUpdate='Update Item'

    this.foodModel = new FoodModel();
    this.foodModel.name = selectedItem.name;
    
    this.foodModel.type = selectedItem.type;
    this.foodModel.price = selectedItem.price;

  }

}

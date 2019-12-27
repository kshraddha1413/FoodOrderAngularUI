import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodModel } from './model/FoodModel';
import { FoodModelWithId } from './model/FoodModelWithId';
import { MessageModel } from './model/MessageModel';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  private _url: string = 'http://localhost:8080/api/';


  constructor(private http: HttpClient) { }

  getFoodItemList(): Observable<FoodModel[]> {
    console.log('from service before')
    return this.http.get<FoodModel[]>(`${this._url}fooditem`);
  }

  postFoodItem(foodItem: FoodModel): Observable<FoodModelWithId> {
    return this.http.post<FoodModelWithId>(`${this._url}fooditem`, foodItem, httpOptions);
  }

  deleteFoodItem(id:number):Observable<MessageModel>{
    return this.http.delete<MessageModel>(`${this._url}fooditem/${id}`);
  }

  putFoodItem(foodModelWithId: FoodModelWithId): Observable<FoodModelWithId> {
    return this.http.put<FoodModelWithId>(`${this._url}fooditem`, foodModelWithId, httpOptions);
  }

}

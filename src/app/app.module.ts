import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FoodService } from './food.service';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { UserViewComponent } from './components/user-view/user-view.component'
import { FoodListComponent } from './components/food-list/food-list.component';

@NgModule({
  declarations: [
    AppComponent,
        FoodListComponent,
        UserViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }

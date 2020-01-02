import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FoodService } from './food.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CustomerViewComponent } from './components/cusotmer-view/customer-view.component'
import { AdminViewComponent } from './components/admin-view/admin-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    CustomerViewComponent
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListComponent } from './components/food-list/food-list.component';
import { UserViewComponent } from './components/user-view/user-view.component';


const routes: Routes = [
  { path: 'admin', component: FoodListComponent },
  { path: 'customer', component: UserViewComponent },
  { path: '', component: UserViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

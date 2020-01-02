import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { CustomerViewComponent } from './components/cusotmer-view/customer-view.component';


const routes: Routes = [
  { path: 'admin', component: AdminViewComponent },
  { path: 'customer', component: CustomerViewComponent },
  { path: '', component: CustomerViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

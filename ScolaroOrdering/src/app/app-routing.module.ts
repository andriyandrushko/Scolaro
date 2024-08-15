import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './orders/order-list.component';
import { OrderCreateComponent } from './orders/order-create.component';
import { OrderDetailsComponent } from './orders/order-details.component';

const routes: Routes = [
  { path: '', component: OrderListComponent },
  { path: 'create', component: OrderCreateComponent },
  { path: 'orders', component: OrderListComponent},
  { path: 'orders/:id', component: OrderDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

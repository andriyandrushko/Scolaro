import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/Order';
import { OrderService } from '../../services/OrderService';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { OrderCreateComponent } from './order-create.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[]
    = ['orderId', 'customerName', 'product', 'quantity', 'orderDate'];
  dataSource = new MatTableDataSource<Order>();

  orders?: Order[] = [];

  constructor(private orderService: OrderService, public dialog: MatDialog) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.dataSource.data = orders;
    });    
  }

  //goToOrderDetails(orderId: number) {
  //  this.router.navigate(['/orders', orderId]);

  //}
  openDialog(): void {
    const dialogRef = this.dialog.open(OrderCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle order creation
        this.orderService.createOrder(result).subscribe(
          (order) => {
            // Handle successful order creation
            this.dataSource.data.push(order);
          },
          (error) => {
            // Handle error
          }
        );
      }
    });
  }
}

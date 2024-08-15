import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../models/Order';
import { OrderService } from '../../services/OrderService';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent implements OnInit {
  order: Order | undefined;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.orderService.getOrderById(id).subscribe(order => {
      this.order = order;
    });
  }
}

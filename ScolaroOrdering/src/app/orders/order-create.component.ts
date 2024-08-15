import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';
import { Order } from '../../models/Order';
import { OrderService } from '../../services/OrderService';
import { ProductService } from '../../services/ProductService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  orderForm!: FormGroup;
  products: Product[] = [];
  isSubmitting = false;

  constructor(private orderService: OrderService, private productService: ProductService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      productId: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.isSubmitting = true;
      const order: Order = this.orderForm.value;
      this.orderService.createOrder(order).subscribe(
        (createdOrder) => {
          this.router.navigate(['/orders']);
          this.isSubmitting = false;
          // Consider resetting the form here: this.orderForm.reset();
        },
        (error) => {
          console.error('Error creating order:', error);
          this.isSubmitting = false;
        }
      );
    }
  }
}

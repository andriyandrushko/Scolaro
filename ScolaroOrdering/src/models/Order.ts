import { Product } from "./Product";

export interface Order {
  orderId?: number;
  customerName: string;
  productId: number;
  quantity: number;
  orderDate: Date;
  product?: Product; // Optional for displaying product details
}

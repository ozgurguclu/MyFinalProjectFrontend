import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summery',
  templateUrl: './cart-summery.component.html',
  styleUrls: ['./cart-summery.component.css']
})
export class CartSummeryComponent implements OnInit{

  cartItems:CartItem[] = [];

  constructor(private cartService:CartService, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
    this.toastrService.error("Ürün silindi", product.productName);
  }
}

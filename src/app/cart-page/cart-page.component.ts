import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/model/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  // arr:any[] = [{path:"assets/image/food1.jpg"},{path:"assets/image/food2.jpg"},{path:"assets/image/food3.jpg"},{path:"assets/image/food4.jpg"}]

  cart!:Cart;
  // cart:any[];

  constructor(private cartService:CartService){
    this.setCart();
    console.log(this.cart.items)
   }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem){
      this.cartService.removeFromCart(cartItem.food.id);
      this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInstring : string){
    const quantity = parseInt(quantityInstring);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}

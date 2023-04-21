import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/model/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
// import { Cart } from '../shared/model/Cart';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  // food: Foods[] = [];
  food!:Foods;

  constructor(private activatedRoute: ActivatedRoute,
    private foodservice:FoodService,
    private cartservice:CartService,
    private router : Router){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = foodservice.getFoodById(params['id'])
      })
  }

  ngOnInit(): void {
  }
    addToCart(){
      this.cartservice.addtoCart(this.food);
      this.router.navigateByUrl('/cart-page');
  }

}

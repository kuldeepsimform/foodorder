import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {
   }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    if (tag == 'All')
    return this.getAll()
    else
    //  this.getAll(): this.getAll().filter((food => food.tags?.includes(tag)));
    return this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return [
      {name: 'All', count: 20},
      {name: 'FastFood', count: 9},
      {name: 'Pizza', count: 4},
      {name: 'Lunch', count: 5},
      {name: 'Fry', count: 3},
      {name: 'SlowFood', count: 4},
    ];
  }

  getAll():Foods[]{
    return[
      {
        id : 1,
        name :'Veggie burger.',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food1.jpg',
        tags : ['FastFood','Lunch' ],
      },
      {
        id : 2,
        name :'Hamburger',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food2.jpg',
        tags : ['FastFood','Lunch' ],
      },
      {
        id : 3,
        name :'Beyond meat burger',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food3.jpg',
        tags : ['FastFood','Lunch' ],
      },
      {
        id : 4,
        name :'Cheeseburger',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food4.jpg',
        tags : ['FastFood','Lunch' ],
      },
      {
        id : 5,
        name :'muffin',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food5.jpg',
        tags : ['SlowFood'],
      },
      {
        id : 6,
        name :'cake',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food6.jpg',
        tags : ['SlowFood' ],
      },
      {
        id : 7,
        name :'coffee',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food7.jpg',
        tags : ['SlowFood' ],
      },
      {
        id : 8,
        name :'black coffee',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food8.jpg',
        tags : ['SlowFood' ],
      },
      {
        id : 9,
        name :'Sweet Potato Fries',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food9.jpg',
        tags : ['Fry'],
      },
      {
        id : 10,
        name :'Chips',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food10.jpg',
        tags : ['Fry'],
      },
      {
        id : 11,
        name :'Cheese Fries ',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food11.jpg',
        tags : ['Fry'],
      },
      {
        id : 12,
        name :'Meat Pizza',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food12.jpg',
        tags : ['Pizza'],
      },
      {
        id : 13,
        name :'Italian Pizza.',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food13.jpg',
        tags : ['Pizza'],
      },
      {
        id : 14,
        name :'Margherita Pizza.',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food14.jpg',
        tags : ['Pizza'],
      },
      {
        id : 15,
        name :'BBQ Chicken Pizza.',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food15.jpg',
        tags : ['Pizza'],
      },
      {
        id : 16,
        name :'Manchurian',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food16.jpg',
        tags : ['FastFood'],
      },
      {
        id : 17,
        name :'Smoothie',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food17.jpg',
        tags : ['FastFood'],
      },
      {
        id : 18,
        name :'Cheddar Green Onion Cheese Ball',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food18.jpg',
        tags : ['FastFood'],
      },
      {
        id : 19,
        name :'Cheese balls',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food19.jpg',
        tags : ['FastFood'],
      },
      {
        id : 20,
        name :'TEA',
        cookTime : '10-20',
        price : 10,
        favourite:false,
        origins:['Italy'],
        stars: 4.5,
        imageurl: '/assets/image/food20.jpg',
        tags : ['FastFood','Lunch' ],
      },

    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-chocolate',
  templateUrl: './hot-chocolate.page.html',
  styleUrls: ['./hot-chocolate.page.scss'],
})
export class HotChocolatePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  hotChocolateItems = [
    {
      name:'Milk Strawberry',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Dark Tiramisu',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Milk Peanut Butter',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Milk Caramel With Sea Salt',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'White Raspberry & Pomegranate',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Lemon & Nutmgeg',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Dark Coconut',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Dark Spicy',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Milk Orange & Cinnamon',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Milk Gianduja',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Milk 0% Sugar',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Dark Rum',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Herbal Λευκή Κάστανο',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    },
    {
      name:'Milk Bueno',
      imageUrl:'../../assets/images/hotChocolates/hotChocolate.jpg',
      price:'2,50€'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

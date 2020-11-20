import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frozen-juice',
  templateUrl: './frozen-juice.page.html',
  styleUrls: ['./frozen-juice.page.scss'],
})
export class FrozenJuicePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  frozenJuiceItems = [
    {
      name:'Γρανίτα Φράουλα',
      imageUrl:'../../assets/images/granites/strawberry.jpg',
      price:'2,50€'
    },
    {
      name:'Γρανίτα Λεμόνι',
      imageUrl:'../../assets/images/granites/strawberry.jpg',
      price:'2,50€'
    },
    {
      name:'Γρανίτα Φρούτα Του Δάσους',
      imageUrl:'../../assets/images/granites/strawberry.jpg',
      price:'2,50€'
    },
    {
      name:'Γρανίτα Mango',
      imageUrl:'../../assets/images/granites/strawberry.jpg',
      price:'2,50€'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

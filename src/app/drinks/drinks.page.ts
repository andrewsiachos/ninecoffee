import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  drinksItems = [
    {
      name:'Frozen Σοκολάτα Γάλακτος',
      imageUrl:'../../assets/images/drinks/drinks.jpg',
      price:'2,00€'
    },
    {
      name:'Σοκολάτα Ζεστή',
      imageUrl:'../../assets/images/drinks/drinks.jpg',
      price:'2,00€'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}

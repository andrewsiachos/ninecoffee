import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juice',
  templateUrl: './juice.page.html',
  styleUrls: ['./juice.page.scss'],
})
export class JuicePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  juiceItems = [
    {
      name:'Φυσικός Χυμός Πορτοκάλι',
      imageUrl:'../../assets/images/categories/juice.jpg',
      price:'2,50€'
    },
    {
      name:'Φυσικός Χυμός Ανάμεικτος',
      imageUrl:'../../assets/images/categories/juice.jpg',
      price:'2,50€'
    },
    {
      name:'Φρουτοσαλάτα',
      imageUrl:'../../assets/images/categories/juice.jpg',
      price:'3,00€'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

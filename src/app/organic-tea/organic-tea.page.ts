import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organic-tea',
  templateUrl: './organic-tea.page.html',
  styleUrls: ['./organic-tea.page.scss'],
})
export class OrganicTeaPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  organicTeaItems = [
    {
      name:'Organic Tea Golden Tonic',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea Chocolate Pu-erh',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea Jasmine Green',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea Mate Lemon',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea Gunpowder Green',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea White Rose',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea Orange Spice',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea Decaf',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea Moroccan Mint',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea Rooibos Chai',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea Chamomile Lemon',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
    {
      name:'Organic Tea Aged Earl Grey',
      imageUrl:'https://bbqindiancuisine.com/wp-content/uploads/2019/05/Iced-Tea.jpg',
      price:'1,50€'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

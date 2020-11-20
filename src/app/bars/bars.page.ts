import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.page.html',
  styleUrls: ['./bars.page.scss'],
})
export class BarsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  barsItems = [
    {
      name:'Μπάρα Καρύδα',
      imageUrl:'../../assets/images/categories/bars.jpg',
      price:'1,30€'
    },
    {
      name:'Μπάρα Καρύδα Με Γέμιση Σοκολάτας',
      imageUrl:'../../assets/images/categories/bars.jpg',
      price:'1,30€'
    },
    {
      name:'Μπάρα Δημητριακών Δαμάσκηνο',
      imageUrl:'../../assets/images/categories/bars.jpg',
      price:'1,20€'
    },
    {
      name:'Μπάρα Δημητριακών Με Μέλι & Φρούτα',
      imageUrl:'../../assets/images/categories/bars.jpg',
      price:'1,30€'
    },
    {
      name:'Μπάρα Δημητριακών Με Επικάλυψη Λευκής Σοκολάτας',
      imageUrl:'../../assets/images/categories/bars.jpg',
      price:'1,40€'
    },
    {
      name:'Μπάρα Δημητριακών Με Επικάλυψη Μαύρης Σοκολάτας',
      imageUrl:'../../assets/images/categories/bars.jpg',
      price:'1,40€'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

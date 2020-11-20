import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refreshments',
  templateUrl: './refreshments.page.html',
  styleUrls: ['./refreshments.page.scss'],
})
export class RefreshmentsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  refreshmentsItems = [
    {
      name:'Amita Motion 330ml',
      imageUrl:'',
      price:'1,50€'
    },
    {
      name:'Perrier 330ml',
      imageUrl:'',
      price:'2,00€'
    },
    {
      name:'Νερό 500ml',
      imageUrl:'',
      price:'0,50€'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

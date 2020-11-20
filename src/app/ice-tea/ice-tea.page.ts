import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice-tea',
  templateUrl: './ice-tea.page.html',
  styleUrls: ['./ice-tea.page.scss'],
})
export class IceTeaPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  iceTeaItems = [
    {
      name:'Bio Ice Tea Lemon',
      imageUrl:'../../assets/images/iceTeas/iceTea.jpg',
      price:'2,80€'
    },
    {
      name:'Bio Ice Tea Peach',
      imageUrl:'../../assets/images/iceTeas/iceTea.jpg',
      price:'2,80€'
    },
    {
      name:'Bio Ice Tea Green',
      imageUrl:'../../assets/images/iceTeas/iceTea.jpg',
      price:'2,80€'
    },
    {
      name:'Bio Ice Tea White',
      imageUrl:'../../assets/images/iceTeas/iceTea.jpg',
      price:'2,80€'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

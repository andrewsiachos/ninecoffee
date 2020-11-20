import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarts',
  templateUrl: './tarts.page.html',
  styleUrls: ['./tarts.page.scss'],
})
export class TartsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  tartsItems = [
    {
      name:'Τάρτα Σοκολάτα & Καραμέλα Με Κομματάκια Φουντουκιού',
      imageUrl:'https://ae01.alicdn.com/kf/HTB16b4WSXXXXXXaaXXXq6xXFXXXq/diamond-painting-big-size-rhinestones-embroidery-coffe-decor-decorative-coffee-beans.jpg_640x640.jpg',
      price:'2,30€'
    },
    {
      name:'Τάρτα Με Κρέμα Λεμόνι',
      imageUrl:'https://ae01.alicdn.com/kf/HTB16b4WSXXXXXXaaXXXq6xXFXXXq/diamond-painting-big-size-rhinestones-embroidery-coffe-decor-decorative-coffee-beans.jpg_640x640.jpg',
      price:'2,30€'
    },
    {
      name:'Wet Muffin Σοκολάτα',
      imageUrl:'https://ae01.alicdn.com/kf/HTB16b4WSXXXXXXaaXXXq6xXFXXXq/diamond-painting-big-size-rhinestones-embroidery-coffe-decor-decorative-coffee-beans.jpg_640x640.jpg',
      price:'2,20€'
    },
    {
      name:'Wet Muffin Μύρτιλλο',
      imageUrl:'https://ae01.alicdn.com/kf/HTB16b4WSXXXXXXaaXXXq6xXFXXXq/diamond-painting-big-size-rhinestones-embroidery-coffe-decor-decorative-coffee-beans.jpg_640x640.jpg',
      price:'2,20€'
    },
    {
      name:'Wet Muffin Καραμέλα',
      imageUrl:'https://ae01.alicdn.com/kf/HTB16b4WSXXXXXXaaXXXq6xXFXXXq/diamond-painting-big-size-rhinestones-embroidery-coffe-decor-decorative-coffee-beans.jpg_640x640.jpg',
      price:'2,20€'
    },
    {
      name:'Wet Muffin Πραλίνα',
      imageUrl:'https://ae01.alicdn.com/kf/HTB16b4WSXXXXXXaaXXXq6xXFXXXq/diamond-painting-big-size-rhinestones-embroidery-coffe-decor-decorative-coffee-beans.jpg_640x640.jpg',
      price:'2,20€'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

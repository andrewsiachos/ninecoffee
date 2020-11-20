import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kritsinia',
  templateUrl: './kritsinia.page.html',
  styleUrls: ['./kritsinia.page.scss'],
})
export class KritsiniaPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  kritsiniaItems = [

    {
      name:'Κριτσίνια Πολύσπορα',
      imageUrl:'https://ae01.alicdn.com/kf/HTB16b4WSXXXXXXaaXXXq6xXFXXXq/diamond-painting-big-size-rhinestones-embroidery-coffe-decor-decorative-coffee-beans.jpg_640x640.jpg',
      price:'1,60€'
    },
    {
      name:'Κριτσίνια Με Τυρί',
      imageUrl:'https://ae01.alicdn.com/kf/HTB16b4WSXXXXXXaaXXXq6xXFXXXq/diamond-painting-big-size-rhinestones-embroidery-coffe-decor-decorative-coffee-beans.jpg_640x640.jpg',
      price:'1,60€'
    },
    {
      name:'Κριτσίνια Χειροποίητα Ολικής Με Cranberry',
      imageUrl:'https://ae01.alicdn.com/kf/HTB16b4WSXXXXXXaaXXXq6xXFXXXq/diamond-painting-big-size-rhinestones-embroidery-coffe-decor-decorative-coffee-beans.jpg_640x640.jpg',
      price:'1,60€'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

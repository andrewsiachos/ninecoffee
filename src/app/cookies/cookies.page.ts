import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.page.html',
  styleUrls: ['./cookies.page.scss'],
})
export class CookiesPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  cookiesItems = [
    {
      name:'Cookies Βανίλια Με Κομμάτια Σοκολάτας',
      imageUrl:'../../assets/images/categories/miniCookies.jpg',
      price:'1,20€'
    },
    {
      name:'Cookies Τριπλή Σοκολάτα',
      imageUrl:'../../assets/images/categories/miniCookies.jpg',
      price:'1,20€'
    },
    {
      name:'Mini Cookies Σοκολάτας',
      imageUrl:'../../assets/images/categories/miniCookies.jpg',
      price:'1,60€'
    },
    {
      name:'Mini Cookies Βουτύρου',
      imageUrl:'../../assets/images/categories/miniCookies.jpg',
      price:'1,60€'
    },
    {
      name:'Mini Brownies',
      imageUrl:'../../assets/images/categories/miniCookies.jpg',
      price:'1,60€'
    },
    {
      name:'Mini Cookies Μήλο & Κανέλα',
      imageUrl:'../../assets/images/categories/miniCookies.jpg',
      price:'1,60€'
    },
    {
      name:'Κριτσίνι Σφολιάτας Με Κανέλα',
      imageUrl:'../../assets/images/categories/miniCookies.jpg',
      price:'1,60€'
    },
    {
      name:'Κέικ Βανίλια & Σοκολάτα',
      imageUrl:'../../assets/images/categories/miniCookies.jpg',
      price:'1,60€'
    },
    {
      name:'Πουράκια Με Πραλίνα Φουντουκιού',
      imageUrl:'../../assets/images/categories/miniCookies.jpg',
      price:'1,60€'
    },
    {
      name:'Mini Cookies Κριτσινάκι Με Επικάλυψη Σοκολάτας',
      imageUrl:'../../assets/images/categories/miniCookies.jpg',
      price:'1,60€'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

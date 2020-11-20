import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.page.html',
  styleUrls: ['./coffee.page.scss'],
})
export class CoffeePage implements OnInit {


  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  coffeItems = [
    {
      name:'Espresso',
      imageUrl:'../../assets/images/coffees/espresso.jpg',
      sizes:[
        {
          size:'Μονός',
          price: '1,30€'
        },
        {
          size:'Διπλός',
          price:'1,70€'
        }
      ]
    },
    {
      name:'Espresso Americano',
      imageUrl:'../../assets/images/coffees/espressoAmericano.jpg',      
      sizes:[
        {
          size:'Μονός',
          price: '1,30€'
        },
        {
          size:'Διπλός',
          price:'1,70€'
        }
      ]
    },
    {
      name:'Freddo Espresso',
      imageUrl:'../../assets/images/coffees/fEspresso.jpg',      
      sizes:[
        {
          size:'Μονός',
          price: '1,70€'
        },
        {
          size:'Διπλός',
          price:'2,70€'
        }
      ]
    },
    {
      name:'Flat White',
      imageUrl:'../../assets/images/coffees/flatWhite.png',  
      sizes:[
        {
          size:'Ζεστός',
          price: 'Από 1,90€'
        }
        
      ]
    },
    {
      name:'Cappuccino',
      imageUrl:'../../assets/images/coffees/cappuccino.jpg',      
      sizes:[
        {
          size:'Μονός',
          price:'1,50€'
        },
        {
          size:'Διπλός',
          price:'1,90€'
        },
        {
          size:'Grande',
          price:'2,40€'
        }
      ]
    },
    {
      name:'Cappuccino Latte',
      imageUrl:'../../assets/images/coffees/capuLate.jpg',      
      sizes:[
        {
          size:'Μονός',
          price:'1,90€'
        },
        {
          size:'Διπλός',
          price:'2,20€'
        }
      ]
    },
    {
      name:'Freddo Cappuccino',
      imageUrl:'../../assets/images/coffees/fCappuccino.jpg',      
      sizes:[
        {
          size:'Διπλός',
          price:'1,90€'
        },
        {
          size:'Τριπλός',
          price:'2,40€'
        }
      ]
    },
    {
      name:'Freddo Cappuccino Latte',
      imageUrl:'../../assets/images/coffees/fCapuLatte.jpg',     
      sizes:[
        {
          size:'Κρύος',
          price:'Από 1,90€'
        }
      ]
    },
    {
      name:'Nes',
      imageUrl:'../../assets/images/coffees/nes.jpg',      
      sizes:[
        {
          size:'Ζεστός',
          price:'Από 1,50€'
        }
      ]
    },
    {
      name:'Frappe',
      imageUrl:'../../assets/images/coffees/frappe.jpg',      
      sizes:[
        {
          size:'Κρύος',
          price:'Από 1,50€'
        }
      ]
    },
    {
      name:'Cold Brew',
      imageUrl:'',
      sizes:[
        {
          size:'Κρύος',
          price:'Από 1,70€'
        }
      ]
    },
    {
      name:'Cold Brew Caramel',
      imageUrl:'',      
      sizes:[
        {
          size:'Κρύος',
          price:'Από 2,20€'
        }
      ]
    },
    {
      name:'Φίλτρου',
      imageUrl:'../../assets/images/coffees/french.jpg',      
      sizes:[
        {
          size:'Ζεστός',
          price:'Από 1,70€'
        }
      ]
    },
    {
      name:'Ελληνικός',
      imageUrl:'../../assets/images/coffees/greek.jpg',     
      sizes:[
        {
          size:'Μονός',
          price:'1,00€'
        },
        {
          size:'Διπλός',
          price:'1,50€'
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  

}

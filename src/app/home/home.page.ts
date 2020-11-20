import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}
  
  categories = [
    {
      name:'Καφεδες',
      url:'../../assets/images/categories/coffee.jpg',
      id:'coffee'
    },
    {
      name:'Παγωμενο Τσαι',
      url:'../../assets/images/categories/iceTea.jpg',
      id:'ice-tea'
    },
    {
      name:'Hot Chocolate',
      url:'../../assets/images/categories/hotChocolate.jpg',
      id:'hot-chocolate'
    },
    {
      name:'Ροφηματα',
      url:'../../assets/images/categories/rofimata.jpg',
      id:'drinks'
    },
    {
      name:'Γρανιτες',
      url:'../../assets/images/categories/strawberry.jpg',
      id:'frozen-juice'
    },
    {
      name:'Sandwiches',
      url:'../../assets/images/categories/sandwich.jpg',
      id:'sandwiches'
    },
    {
      name:'Φυσικοι Χυμοι',
      url:'../../assets/images/categories/juice.jpg',
      id:'juice' 
    },
    {
      name:'Μπαρες Δημητριακων',
      url:'../../assets/images/categories/bars.jpg',
      id:'bars'
    },
    {
      name:'Cookies & Mini-Cookies',
      url:'../../assets/images/categories/miniCookies.jpg',
      id:'cookies'
    },
    {
      name:'Ταρτες & Muffins',
      url:'../../assets/images/categories/tarts.jpg',
      id:'tarts'
    },
    {
      name:'Κριτσινια',
      url:'../../assets/images/categories/kritsinia.jpg',
      id:'kritsinia'
    },
    {
      name:'Organic Tea',
      url:'../../assets/images/categories/organicTea.jpg',
      id:'organic-tea'
    },
    {
      name:'Αναψυκτικα',
      url:'../../assets/images/categories/refreshments.jpg',
      id:'refreshments'
    }
  ];

  ngOnInit(){
    
  }

}

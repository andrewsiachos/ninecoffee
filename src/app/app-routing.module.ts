import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'coffee',
    loadChildren: () => import('./coffee/coffee.module').then( m => m.CoffeePageModule)
  },
  {
    path: 'ice-tea',
    loadChildren: () => import('./ice-tea/ice-tea.module').then( m => m.IceTeaPageModule)
  },
  {
    path: 'hot-chocolate',
    loadChildren: () => import('./hot-chocolate/hot-chocolate.module').then( m => m.HotChocolatePageModule)
  },
  {
    path: 'drinks',
    loadChildren: () => import('./drinks/drinks.module').then( m => m.DrinksPageModule)
  },
  {
    path: 'frozen-juice',
    loadChildren: () => import('./frozen-juice/frozen-juice.module').then( m => m.FrozenJuicePageModule)
  },
  {
    path: 'juice',
    loadChildren: () => import('./juice/juice.module').then( m => m.JuicePageModule)
  },
  {
    path: 'bars',
    loadChildren: () => import('./bars/bars.module').then( m => m.BarsPageModule)
  },
  {
    path: 'cookies',
    loadChildren: () => import('./cookies/cookies.module').then( m => m.CookiesPageModule)
  },
  {
    path: 'tarts',
    loadChildren: () => import('./tarts/tarts.module').then( m => m.TartsPageModule)
  },
  {
    path: 'kritsinia',
    loadChildren: () => import('./kritsinia/kritsinia.module').then( m => m.KritsiniaPageModule)
  },
  {
    path: 'organic-tea',
    loadChildren: () => import('./organic-tea/organic-tea.module').then( m => m.OrganicTeaPageModule)
  },
  {
    path: 'refreshments',
    loadChildren: () => import('./refreshments/refreshments.module').then( m => m.RefreshmentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

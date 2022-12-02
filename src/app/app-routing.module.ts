import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { GameListComponent } from './game-list/game-list.component';
import { RecommendedListComponent } from './recommended-list/recommended-list.component';
import { RpgListComponent } from './rpg-list/rpg-list.component';
import { SportListComponent } from './sport-list/sport-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/juegos/',
    pathMatch: 'full'
  },
  {
    path: 'juegos/',
    component: GameListComponent
  },
  {
    path: 'juegos/rpg',
    component: RpgListComponent
  },
  {
    path: 'juegos/deporte',
    component: SportListComponent
  },
  {
    path: 'juegos/recomendados',
    component: RecommendedListComponent
  },
  {
    path: 'carrito',
    component: CartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
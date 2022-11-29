import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { RpgListComponent } from './rpg-list/rpg-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'juegos',
    pathMatch: 'full'
  },
  {
    path: 'juegos',
  component: GameListComponent
  },
  {
    path: 'juegos/rpg',
    component: RpgListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

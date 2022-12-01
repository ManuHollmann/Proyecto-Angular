import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { GameListComponent } from './game-list/game-list.component';
import { RpgListComponent } from './rpg-list/rpg-list.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { InputScoreComponent } from './input-score/input-score.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    RpgListComponent,
    CartComponent,
    InputScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
=======

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> parent of 5dc3d87 (Agregados juegos y carruseles)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

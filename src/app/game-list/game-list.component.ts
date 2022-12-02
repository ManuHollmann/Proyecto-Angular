import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { GamesDataService } from '../games-data.service';
import { Game } from './Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
})
export class GameListComponent implements OnInit {

  games:  Game[] = [];
  constructor(private gamesData: GamesDataService, private cart: GameCartService) {
  }

  ngOnInit(): void {
    this.games = this.gamesData.getAllGames();
  }

  addToCart(game:Game){
    this.cart.addToCart(game);
  }

}

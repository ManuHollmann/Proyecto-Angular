import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-rpg-list',
  templateUrl: './rpg-list.component.html',
})
export class RpgListComponent implements OnInit {
  games: Game[] | undefined;
  constructor(private gamesData: GamesDataService, private cart: GameCartService) {
  }

  ngOnInit(): void {
    this.games = this.gamesData.getAllGames();
  }
  
  getScore(game: Game){
    return this.gamesData.getScore(game.id);
  }

  addToCart(game:Game){
    this.cart.addToCart(game);
  }
}

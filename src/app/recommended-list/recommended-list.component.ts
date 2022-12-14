import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-recommended-list',
  templateUrl: './recommended-list.component.html',
  styleUrls: ['./recommended-list.component.scss']
})
export class RecommendedListComponent implements OnInit {
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


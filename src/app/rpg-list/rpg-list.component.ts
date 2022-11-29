import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-rpg-list',
  templateUrl: './rpg-list.component.html',
  styleUrls: ['./rpg-list.component.scss']
})
export class RpgListComponent implements OnInit {
  games: Game[];
  constructor(private cart: GameCartService, private gamesData: GamesDataService) { 
    this.cart,
    this.gamesData,
    this.games = gamesData.getAllGames();
  }

  ngOnInit(): void {
  }

  scoreDown(game: Game) {
      this.gamesData.scoreDown(game);
    }

  scoreUp(game: Game) {
    this.gamesData.scoreUp(game);
  }
  
  getScore(game: Game){
    return this.gamesData.getScore(game);
  }
}

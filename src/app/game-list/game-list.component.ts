import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { GamesDataService } from '../games-data.service';
import { Game } from './Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  
  scoreUp(game: Game){
    this.gamesData.scoreUp(game);
  }
  getScore(game: Game){ 
    return this.gamesData.getScore(game);
  }
  scoreDown(event: Event) {
    this.gamesData.scoreDown(<Game>(<unknown>((<HTMLInputElement>event.target).value)));
  }

  addToCart(game: Game){
    
  }
  games:  Game[];
  constructor(private cart: GameCartService, private gamesData: GamesDataService) { 
    this.cart,
    this.gamesData,
    this.games = gamesData.getAllGames()
    }

  ngOnInit(): void {
  }

}

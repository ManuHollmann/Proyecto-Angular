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

  games:  Game[] = [];
  constructor(private cart: GameCartService, private gamesData: GamesDataService) {
  }

  ngOnInit(): void {
    this.gamesData.getAllGames()
    .subscribe(games => this.games = games);
  }

  addToCart(game:Game){

  }

}

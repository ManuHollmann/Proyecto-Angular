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
  }

  ngOnInit(): void {
    this.gamesData.getAllGames()
    .subscribe(games => this.games = games);
  }
  
  getScore(game: Game){
    return this.gamesData.getScore(game);
  }
}

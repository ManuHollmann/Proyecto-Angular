import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  games:  Game[];
  constructor(private cart: GameCartService, private gamesData: GamesDataService) {
  }

  ngOnInit(): void {
    this.gamesData.getAllGames()
    .subscribe(games => this.games = games);
  }

}

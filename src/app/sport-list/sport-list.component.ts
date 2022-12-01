import { Component, OnInit } from '@angular/core';
import { Game } from '../game-list/Game';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.scss']
})
export class SportListComponent implements OnInit {
  games: Game[] | undefined;
  constructor(private gamesData: GamesDataService) {
  }

  ngOnInit(): void {
    this.games = this.gamesData.getAllGames();
  }
  
  getScore(game: Game){
    return this.gamesData.getScore(game.id);
  }
}


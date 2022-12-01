import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-input-score',
  templateUrl: './input-score.component.html',
  styleUrls: ['./input-score.component.scss']
})
export class InputScoreComponent implements OnInit {

  constructor(private cart: GameCartService, private gamesData: GamesDataService) { }

  ngOnInit(): void {
  }

  @Input()
  score!: Number;

  @Input()
  id!: Number;

  @Output() scoreChange:EventEmitter<Number> = new EventEmitter<Number>();
  
  scoreDown(id: Number) {
    if(this.score > 9){
      this.gamesData.scoreChange(this.id, -10);
      this.scoreChange.emit(this.score);
    }
  }

  scoreUp(id: Number) {
    if(this.score < 89){
      this.gamesData.scoreChange(this.id, +10);
      this.scoreChange.emit(this.score);
    }
  }

  getScore(id: Number){
    return this.gamesData.getScore(id);
  }

}

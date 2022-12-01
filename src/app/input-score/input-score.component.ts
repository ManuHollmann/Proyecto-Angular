import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../game-list/Game';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-input-score',
  templateUrl: './input-score.component.html',
  styleUrls: ['./input-score.component.scss']
})
export class InputScoreComponent implements OnInit {

  constructor(private gamesData: GamesDataService) { }

  ngOnInit(): void {
  }

  @Input()
  score!: number;

  @Input()
  id!: number;

  @Output() scoreChange:EventEmitter<number> = new EventEmitter<number>();
  
  scoreDown(id: number) {
    console.log([id],[this.id])
    if(this.score > 9){
      this.score = this.score -10;
      this.scoreChange.emit(this.score);
    }
  }

  scoreUp(id: number) {
    if(this.score < 91 && id == this.id){
      this.score = this.score +10;
      this.scoreChange.emit(this.score);
    }
  }

  getScore(id: number){
    return this.gamesData.getScore(id);
  }

}
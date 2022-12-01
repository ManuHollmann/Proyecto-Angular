import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Game } from './game-list/Game';
import { HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  constructor(private http:HttpClient) { }
  url : string = 'https://63879d48e399d2e4730454e2.mockapi.io/api/v1/games';

  public getAllGames():Observable<Game[]>{
    return this.http.get<Game[]>(this.url)
    .pipe(tap((games:Game[]) => games.forEach(game => game)));
  }

  scoreChange(id: Number, change: number) {
      let game: Game| undefined = this.getOneGame(id);
      game.score = game.score + change;
      this.http.put<Game>(this.url+'/'+game.id, game);
  }


  getScore(id){
    let game: Game| undefined = this.getOneGame(id);
    let stars =
    {
      'width': game.score + '%'
    }

    return stars;
  }

  getOneGame(id){
    let games: Game[] = getAllGame();
    
  }
}
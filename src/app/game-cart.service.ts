import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  private cartList: Game[] = [];
  list : BehaviorSubject<Game[]> = new BehaviorSubject(this.cartList);
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(game: Game){
    let gameFind: Game | undefined = this.cartList.find((g) => g.id == game.id);
    if(!gameFind){
      this.cartList.push({... game});
    }
    game.purchased = true;
    this.list.next(this.cartList);
  }
}

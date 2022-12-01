import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  constructor() { }
  
  games: Game[] = [
    {"id":0,"image":"assets/game icons/game icon.png","title":"The Elder Scrolls V: Skyrim",
    "platforms":"PC, PS4, PS5, Xbox One, Xbox Series X","price":3,"purchased":false,"categories":["recommended","rpg"],"score":0},
    {"id":1,"image":"assets/game icons/game icon (2).png","title":"Hollow Knight",
    "platforms":"PC","price":3,"purchased":true,"categories":["rpg"],"score":40},
    {"id":2,"image":"assets/game icons/game icon (1).png","title":"Final Fantasy XIV",
    "platforms":"Online complete edition (PC)","price":13,"purchased":false,"categories":["rpg","recommended"],"score":0},
    {"id":3,"image":"assets/game icons/game icon (10).png","title":"Battlefield V",
    "platforms":"Online edition (PC)","price":0,"purchased":false,"categories":["recommended","action"],"score":50},
    {"id":4,"image":"assets/game icons/game icon (7).png","title":"Batman: Arkham Knight",
    "platforms":"PC, PS4, PS5, Xbox One","price":4,"purchased":false,"categories":["recommended","rpg"],"score":0},
    {"id":5,"image":"assets/game icons/game icon (8).png","title":"Call of Duty: Vanguard",
    "platforms":"Online complete edition (PC)","price":6,"purchased":false,"categories":["action"],"score":10},
    {"id":6,"image":"assets/game icons/game icon (3).png","title":"Destiny 2",
    "platforms":"Legendary Edition (PC)","price":34,"purchased":true,"categories":["action"],"score":0},
    {"id":7,"image":"assets/game icons/game icon (4).png","title":"Conecta Espacial 4",
    "platforms":"PC","price":9,"purchased":true,"categories":["rpg"],"score":0},
    {"id":8,"image":"assets/game icons/game icon (5).png","title":"Gauntlet",
    "platforms":"Online complete edition (PC)","price":7,"purchased":false,"categories":["rpg"],"score":20},
    {"id":9,"image":"assets/game icons/game icon (6).png","title":"Horizon: Forbidden West",
    "platforms":"Complete edition(PC)","price":3,"purchased":false,"categories":["rpg","action"],"score":0},
    {"id":10,"image":"assets/game icons/game icon (9).png","title":"Mortal Kombat 11",
    "platforms":"Ultimate edition (PC)","price":11,"purchased":false,"categories":["action"],"score":0},
    {"id":11,"image":"assets/game icons/game icon (11).png","title":"Back 4 Blood",
    "platforms":"Online complete edition (PC)","price":11,"purchased":false,"categories":["action"],"score":30},
    {"id":12,"image":"assets/game icons/game icon (12).png","title":"Madden 19",
    "platforms":"PC, PS4, PS5, Xbox One, Xbox Series X","price":5,"purchased":false,"categories":["sport","recommended"],"score":0},
    {"id":13,"image":"assets/game icons/game icon (13).png","title":"National Hockey League 17","platforms":"PS4, Xbox One, PC","price":5,"purchased":true,
    "categories":["sport"],"score":40},
    {"id":14,"image":"assets/game icons/game icon (14).png","title":"Pro Evolution Soccer 2019","platforms":"PS4, Xbox One, PC","price":0,"purchased":false,
    "categories":["sport"],"score":0},
    {"id":15,"image":"assets/game icons/game icon (15).png","title":"NBA Live 19","platforms":"The One edition (Xbox One)","price":2,"purchased":false,
    "categories":["sport"],"score":10},
    {"id":16,"image":"assets/game icons/game icon (16).png","title":"FIFA 16","platforms":"PS4","price":6,"purchased":false,
    "categories":["sport"],"score":0},
    {"id":17,"image":"assets/game icons/game icon (17).png","title":"Assassin's Creed Unity","platforms":"Legendary Edition (PC)","price":15,"purchased":true,
    "categories":["action"],"score":20},
    {"id":18,"image":"assets/game icons/game icon (18).png","title":"Total War: WARHAMMER ","platforms":"Legendary Edition (PC)","price":8,"purchased":true,
    "categories":["action","rpg"],"score":0},
    {"id":19,"image":"assets/game icons/game icon (19).png","title":"Elden Ring","platforms":"PC","price":5,"purchased":true,
    "categories":["action","rpg","recommended"],"score":60}]

  public getAllGames(): Game[]{
    return this.games;
  }

  getScore(id:number){
    let game: Game = this.getOneGame(id);
    let stars =
    {
      'width': game.score + '%'
    }

    return stars;
  }

  getOneGame(id: number){
    let games = this.games;
    let item: Game = games[0];
    
    for (const game of games) {
      if(game.id == id){
        item = game;
      }
    }
    return item;
  }
}
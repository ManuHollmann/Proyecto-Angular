import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  games: Game[] = [
    {
    "image":"assets/game icons/game icon.png",
    "title":"The Elder Scrolls V: Skyrim",
    "platforms":"PC, PS4, PS5, Xbox One, Xbox Series X",
    "price":3.00,
    "purchased":false,
    "categories": ["recommended","rpg"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (2).png",
    "title":"Hollow Knight",
    "platforms":"PC",
    "price":3.00,
    "purchased":true,
    "categories": ["rpg"],
    "score": 40,
    },
    {"image":"assets/game icons/game icon (1).png",
    "title":"Final Fantasy XIV",
    "platforms":"Online complete edition (PC)",
    "price":13.00,
    "purchased":false,
    "categories": ["rpg","recommended"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (10).png",
    "title":"Battlefield V",
    "platforms":"Online edition (PC)",
    "price":0.00,
    "purchased":false,
    "categories": ["recommended","action"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (7).png",
    "title":"Batman: Arkham Knight",
    "platforms":"PC, PS4, PS5, Xbox One",
    "price":4.00,
    "purchased":false,
    "categories": ["recommended","rpg"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (8).png",
    "title":"Call of Duty: Vanguard",
    "platforms":"Online complete edition (PC)",
    "price":6.00,
    "purchased":false,
    "categories": ["action"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (3).png",
    "title":"Destiny 2",
    "platforms":"Legendary Edition (PC)",
    "price":34.00,
    "purchased":true,
    "categories": ["action"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (4).png",
    "title":"Conecta Espacial 4",
    "platforms":"PC",
    "price":9.00,
    "purchased":true,
    "categories": ["rpg"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (5).png",
    "title":"Gauntlet",
    "platforms":"Online complete edition (PC)",
    "price":7.00,
    "purchased":false,
    "categories": ["rpg"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (6).png",
    "title":"Horizon: Forbidden West",
    "platforms":"Complete edition(PC)",
    "price":3.00,
    "purchased":false,
    "categories": ["rpg", "action"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (9).png",
    "title":"Mortal Kombat 11",
    "platforms":"Ultimate edition (PC)",
    "price":11.00,
    "purchased":false,
    "categories": ["action"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (11).png",
    "title":"Back 4 Blood",
    "platforms":"Online complete edition (PC)",
    "price":11.00,
    "purchased":false,
    "categories": ["action"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (12).png",
    "title":"Madden 19",
    "platforms":"PC, PS4, PS5, Xbox One, Xbox Series X",
    "price":5.00,
    "purchased":false,
    "categories": ["sport","recommended"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (13).png",
    "title":"National Hockey League 17",
    "platforms":"PS4, Xbox One, PC",
    "price":5.00,
    "purchased":true,
    "categories": ["sport"],
    "score": 40,
    },
    {"image":"assets/game icons/game icon (14).png",
    "title":"Pro Evolution Soccer 2019",
    "platforms":"PS4, Xbox One, PC",
    "price":0.00,
    "purchased":false,
    "categories": ["sport"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (15).png",
    "title":"NBA Live 19",
    "platforms":"The One edition (Xbox One)",
    "price":2.00,
    "purchased":false,
    "categories": ["sport"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (16).png",
    "title":"FIFA 16",
    "platforms":"PS4",
    "price":6.00,
    "purchased":false,
    "categories": ["sport"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (17).png",
    "title":"Assassin's Creed Unity",
    "platforms":"Legendary Edition (PC)",
    "price":15.00,
    "purchased":true,
    "categories": ["action"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (18).png",
    "title":"Total War: WARHAMMER ",
    "platforms":"Legendary Edition (PC)",
    "price":8.00,
    "purchased":true,
    "categories": ["action","rpg"],
    "score": 0,
    },
    {"image":"assets/game icons/game icon (19).png",
    "title":"Elden Ring",
    "platforms":"PC",
    "price":5.00,
    "purchased":true,
    "categories": ["action","rpg","recommended"],
    "score": 0,
    }
  ]

  constructor() { }
  @Input()
  newScore: number;

  @Output()
  scoreChange: EventEmitter<number> = new EventEmitter<number>;


  scoreDown(game: Game) {
    if(game.score > 9){
      this.newScore = game.score -10;
      this.scoreChange.emit(this.newScore);  
    }
  }

  scoreUp(game: Game) {
    if(game.score < 99){
      game.score = game.score +10;
      this.scoreChange.emit(game.score);  
    }
  }


getScore(game: Game){
  
  let stars =
  {
    'width': game.score + '%'
  }

  return stars;
}

getAllGames(){
  return this.games;
}
}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { GameListComponent } from './game-list/game-list.component';
import { RpgListComponent } from './rpg-list/rpg-list.component';
import { InputScoreComponent } from "./input-score/input-score.component";
import { SportListComponent } from './sport-list/sport-list.component';
import { RecommendedListComponent } from './recommended-list/recommended-list.component';

@NgModule({
    declarations: [
        AppComponent,
        GameListComponent,
        RpgListComponent,
        InputScoreComponent,
        CartComponent,
        SportListComponent,
        RecommendedListComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ]
})
export class AppModule { }

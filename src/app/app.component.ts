import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameAreaComponent } from './components/game-area/game-area.component';
import { GameService } from './services/game.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameSetup } from './models/game-setup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameAreaComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'battleship';
  gameStarted: boolean = false;
  APIUrl: string = "https://localhost:7120/Game/start/";
  
  constructor(private gameService: GameService,
    private http: HttpClient) {}

  startGame() {
    this.gameStarted = true;
    this.getGameSetup().subscribe(gameSetup => {
      const { ships, shots } = gameSetup;
      
      const shipsPositionsPlayer1 = ships[0];
      const shipsPositionsPlayer2 = ships[1];
  
      this.gameService.placeShips('Player 1:my-notebook', shipsPositionsPlayer1);
      this.gameService.placeShips('Player 2:my-notebook', shipsPositionsPlayer2);
      this.gameService.simulateGameplay(shots);
    });
  }

  getGameSetup(): Observable<GameSetup> {
    return this.http.get<GameSetup>(this.APIUrl);
  }
}

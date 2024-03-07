import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameAreaComponent } from './components/game-area/game-area.component';
import { ShipPosition } from './models/ship-position';
import { GameService } from './services/game.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    this.getShipsPositions().subscribe(shipsPositions => {
      const [shipsPositionsPlayer1, shipsPositionsPlayer2] = shipsPositions;
      this.gameService.placeShips('Player 1:my-notebook', shipsPositionsPlayer1);
      this.gameService.placeShips('Player 2:my-notebook', shipsPositionsPlayer2);
    });
  }

  getShipsPositions(): Observable<ShipPosition[][]> {
    return this.http.get<ShipPosition[][]>(this.APIUrl);
  }
}

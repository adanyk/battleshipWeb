import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameAreaComponent } from './components/game-area/game-area.component';
import { ShipPosition } from './models/ship-position';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'battleship';
  gameStarted: boolean = false;
  
  constructor(private gameService: GameService) {}

  startGame() {
    this.gameStarted = true;
    const [shipsPositionsPlayer1, shipsPositionsPlayer2] = this.getShipsPositions();

    this.gameService.placeShips('Player 1:my-notebook', shipsPositionsPlayer1);
    this.gameService.placeShips('Player 2:my-notebook', shipsPositionsPlayer2);
  }

  getShipsPositions(): ShipPosition[][] {
    return this.mockGetShipsPositions();
  }

  mockGetShipsPositions(): ShipPosition[][] {
    return [[
        { width: '40%', height: '10%', top: '0%', left: '10%'},
        { width: '10%', height: '30%', top: '0%', left: '0%'}
      ],[
        { width: '30%', height: '10%', top: '90%', left: '0%'},
        { width: '30%', height: '10%', top: '90%', left: '70%'},
        { width: '30%', height: '10%', top: '80%', left: '50%'}
    ]];
  }
}

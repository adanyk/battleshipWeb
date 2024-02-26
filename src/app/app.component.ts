import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameAreaComponent } from './components/game-area/game-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'battleship';
}

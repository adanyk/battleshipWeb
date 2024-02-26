import { Component } from '@angular/core';
import { PlayerFieldComponent } from '../player-field/player-field.component';

@Component({
  selector: 'app-game-area',
  standalone: true,
  imports: [PlayerFieldComponent],
  templateUrl: './game-area.component.html',
  styleUrl: './game-area.component.scss'
})
export class GameAreaComponent {

}

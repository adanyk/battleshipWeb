import { Component, Input } from '@angular/core';
import { PlayerBoardComponent } from '../player-board/player-board.component';

@Component({
  selector: 'app-player-field',
  standalone: true,
  imports: [PlayerBoardComponent],
  templateUrl: './player-field.component.html',
  styleUrl: './player-field.component.scss'
})
export class PlayerFieldComponent {
  @Input() playerName: string = "";
}

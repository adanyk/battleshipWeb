import { Component } from '@angular/core';
import { NotebookComponent } from '../notebook/notebook.component';

@Component({
  selector: 'app-player-board',
  standalone: true,
  imports: [NotebookComponent],
  templateUrl: './player-board.component.html',
  styleUrl: './player-board.component.scss'
})
export class PlayerBoardComponent {
}

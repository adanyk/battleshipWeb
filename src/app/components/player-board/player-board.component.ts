import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from '../notebook/notebook.component';

@Component({
  selector: 'app-player-board',
  standalone: true,
  imports: [CommonModule, NotebookComponent],
  templateUrl: './player-board.component.html',
  styleUrl: './player-board.component.scss'
})
export class PlayerBoardComponent {
}

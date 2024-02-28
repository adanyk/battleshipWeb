import { Component } from '@angular/core';
import { MapContainerComponent } from '../map-container/map-container.component';

@Component({
  selector: 'app-notebook',
  standalone: true,
  imports: [MapContainerComponent],
  templateUrl: './notebook.component.html',
  styleUrl: './notebook.component.scss'
})
export class NotebookComponent {

}

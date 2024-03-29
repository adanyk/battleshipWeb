import { Component, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-container',
  standalone: true,
  imports: [CommonModule, MapComponent],
  templateUrl: './map-container.component.html',
  styleUrl: './map-container.component.scss'
})
export class MapContainerComponent {
  @Input() playerName: string = '';
  @Input() notebookType: string = '';
}

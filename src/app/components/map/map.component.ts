import { Component } from '@angular/core';
import { ShipComponent } from '../ship/ship.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [ShipComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

}

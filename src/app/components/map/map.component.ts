import { Component, Input, OnInit } from '@angular/core';
import { ShipComponent } from '../ship/ship.component';
import { ShipPosition } from '../../models/ship-position';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [ShipComponent, CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  @Input() playerName: string = '';
  @Input() notebookType: string = '';
  fleet: ShipPosition[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.registerMapComponent(this);
    this.subscription.add(
      this.gameService.getFleetObservable(this.playerName, this.notebookType).subscribe((positions) => {
        this.fleet = positions;
      })
    );
  }
}

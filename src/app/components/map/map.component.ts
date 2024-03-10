import { Component, Input, OnInit } from '@angular/core';
import { ShipComponent } from '../ship/ship.component';
import { ShipPosition } from '../../models/ship-position';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ShotMarkComponent } from '../shot-mark/shot-mark.component';
import { ShotResult } from '../../models/shot-result';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [ShipComponent, CommonModule, ShotMarkComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  @Input() playerName: string = '';
  @Input() notebookType: string = '';
  fleet: ShipPosition[] = [];
  private subscription: Subscription = new Subscription();
  mapSize = 10;
  shots: ShotResult[][] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.registerMapComponent(this);
    this.subscription.add(
      this.gameService.getFleetObservable(this).subscribe((positions) => {
        this.fleet = positions;
      })
    );

    
    this.shots = Array.from({ length: this.mapSize }, () =>
      Array(this.mapSize).fill(ShotResult.Unfired)
    );
  }

  updateShotResult(x: number, y: number, result: ShotResult) {
    if (x >= 0 && x < this.mapSize && y >= 0 && y < this.mapSize) {
      this.shots[x][y] = result;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ShipComponent } from '../ship/ship.component';
import { ShipPosition } from '../../models/ship-position';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ShotMarkComponent } from '../shot-mark/shot-mark.component';
import { ShotResult } from '../../models/shot-result';
import { Shot } from '../../models/shot';

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
    this.subscribeToFleetUpdates();
    this.initializeShots();
    this.subscribeToShots();
  }

  private subscribeToFleetUpdates(): void {
    this.subscription.add(
      this.gameService.getFleetObservable(this).subscribe((positions) => {
        this.fleet = positions;
      })
    );
  }

  private initializeShots(): void {
    this.shots = Array.from({ length: this.mapSize }, () => 
      Array(this.mapSize).fill(ShotResult.Unfired)
    );
  }

  private subscribeToShots(): void {
    this.subscription.add(
      this.gameService.getShotsObservable(this).subscribe((shot) => {
        this.updateShotResult(shot);
      })
    );
  }

  updateShotResult(shot: Shot) {
    this.shots[shot.coorX][shot.coorY] = shot.result;
  }
}

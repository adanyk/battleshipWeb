import { Injectable } from '@angular/core';
import { ShipPosition } from '../models/ship-position';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MapComponent } from '../components/map/map.component';
import { Shot } from '../models/shot';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private fleets: Map<string, BehaviorSubject<ShipPosition[]>> = new Map();
  private shots: Map<string, Subject<Shot>> = new Map();

  registerMapComponent(map: MapComponent): void {
    const key = `${map.playerName}:${map.notebookType}`;
    this.fleets.set(key, new BehaviorSubject<ShipPosition[]>([]));
    this.shots.set(key, new Subject<Shot>());
  }

  getFleetObservable(map: MapComponent): Observable<ShipPosition[]> {
    const key = `${map.playerName}:${map.notebookType}`;
    const fleetSubject = this.fleets.get(key)!;
    return fleetSubject.asObservable();
  }
  getShotsObservable(map: MapComponent) {
    const key = `${map.playerName}:${map.notebookType}`;
    const shotsSubject = this.shots.get(key)!;
    return shotsSubject.asObservable();
  }

  placeShips(playerNotebookKey: string, positions: ShipPosition[]): void {
    const fleetSubject = this.fleets.get(playerNotebookKey)!;
    fleetSubject.next(positions);
  }
  shoot(playerNotebookKey: string, shot: Shot) {
    const shotsSubject = this.shots.get(playerNotebookKey)!;
    shotsSubject.next(shot);
  }
}

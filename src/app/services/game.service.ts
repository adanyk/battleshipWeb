import { Injectable } from '@angular/core';
import { ShipPosition } from '../models/ship-position';
import { BehaviorSubject, Observable } from 'rxjs';
import { MapComponent } from '../components/map/map.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private fleets: Map<string, BehaviorSubject<ShipPosition[]>> = new Map();

  registerMapComponent(map: MapComponent): void {
    const key = `${map.playerName}:${map.notebookType}`;
    this.fleets.set(key, new BehaviorSubject<ShipPosition[]>([]));
  }

  getFleetObservable(map: MapComponent): Observable<ShipPosition[]> {
    const key = `${map.playerName}:${map.notebookType}`;
    const fleetSubject = this.fleets.get(key)!;
    return fleetSubject.asObservable();
  }

  placeShips(playerNotebookKey: string, positions: ShipPosition[]): void {
    const fleetSubject = this.fleets.get(playerNotebookKey)!;
    fleetSubject.next(positions);
  }
}

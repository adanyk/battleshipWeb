import { Shot } from "./shot";
import { ShipPosition } from "./ship-position";

export interface GameSetup {
  ships: ShipPosition[][],
  shots: Shot[]
}

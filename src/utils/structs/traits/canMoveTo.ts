import { Position } from "../position"

export interface CanMoveTo {
  canMoveTo(position: Position): boolean;
}

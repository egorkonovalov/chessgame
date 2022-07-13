import { Position } from "../position"
import { Distance } from "../distance"

export interface DistanceFrom {
  distanceFrom(position: Position): Distance;
}

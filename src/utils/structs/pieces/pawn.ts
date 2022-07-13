import { Piece } from "../piece"
import { Position } from "../position";

export class Pawn extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);

    return distance.file <= 2;
  }
}

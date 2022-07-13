import { Piece } from "../piece"
import { Position } from "../position";

export class Knight extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);

    return (
      distance.rank !== distance.file &&
      (distance.file === 2 || distance.rank === 2)
    );
  }
}

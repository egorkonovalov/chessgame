import { Piece } from "../piece"
import { Position } from "../position";

export class Rook extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    /**
     * Moving horizontally OR vertically entails movement
     * exclusively in ONE direction (X or Y). So one of
     * the distances should always be equal to zero.
     */
    return distance.rank === 0 || distance.file === 0;
  }
}

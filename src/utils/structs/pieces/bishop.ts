import { Piece } from "../piece"
import { Position } from "../position";

export class Bishop extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    /**
     * Moving diagonally entails moving the same number
     * of squares both horizontally and vertically. So the
     * change in the distance must be the same for both X and Y.
     */
    return distance.rank === distance.file;
  }
}

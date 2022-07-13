import { Piece } from "../piece"
import { Position } from "../position";

export class Queen extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    /**
     * A queen combines the power of a rook and bishop and
     * can move any number of squares horizontally, vertically,
     * or diagonally, but cannot leap over other pieces.
     * */
    return (
      distance.rank === distance.file ||
      distance.rank === 0 ||
      distance.file === 0
    );
  }
}

import { Color, File, Rank } from "./sets"
import { Position } from "./position";
import { CanMoveTo } from "./traits/canMoveTo";

export abstract class Piece implements CanMoveTo {
  protected position: Position;
  constructor(private readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }
  moveTo(position: Position) {
    this.position = position;
  }
  abstract canMoveTo(position: Position): boolean;
}

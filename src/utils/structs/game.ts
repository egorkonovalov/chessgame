import { Bishop } from "./pieces/bishop"
import { King } from "./pieces/king"
import { Knight } from "./pieces/knight"
import { Pawn } from "./pieces/pawn"
import { Queen } from "./pieces/queen"
import { Rook } from "./pieces/rook"


export class Game {
  private pieces = Game.makePieces();
  private static makePieces(): (King | Queen | Bishop | Rook | Knight)[] {
    return [
      //Kings
      new King("White", "E", 1),
      new King("Black", "E", 8),

      //Queens
      new Queen("White", "D", 1),
      new Queen("Black", "D", 8),

      //Bishops
      new Bishop("White", "C", 1),
      new Bishop("Black", "C", 8),
      new Bishop("White", "F", 1),
      new Bishop("Black", "F", 8),

      //Rooks
      new Rook("White", "A", 1),
      new Rook("Black", "A", 8),
      new Rook("White", "H", 1),
      new Rook("Black", "H", 8),

      //Knights
      new Knight("White", "B", 1),
      new Knight("Black", "B", 8),
      new Knight("White", "G", 1),
      new Knight("Black", "G", 8),
    ];
  }
}

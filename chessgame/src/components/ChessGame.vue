<script setup lang="ts">
import { ref, unref } from "vue";

type Color = "Black" | "White";
type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  constructor(private file: File, private rank: Rank) {}
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}

abstract class Piece {
  protected position: Position;
  constructor(private readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }
  moveTo(position: Position) {
    this.position = position;
  }
  abstract canMoveTo(position: Position): boolean;
}

class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}

class Queen extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    console.log(distance);
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

class Bishop extends Piece {
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

class Rook extends Piece {
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

class Knight extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);

    return (
      distance.rank !== distance.file &&
      (distance.file === 2 || distance.rank === 2)
    );
  }
}

class Pawn extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);

    return distance.file <= 2;
  }
}

class Game {
  private pieces = Game.makePieces();
  private static makePieces() {
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

const game = new Game();
let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

let selectedPiece = ref<Piece | null>(null);
let selectedFile = ref<File | null>(null);
let selectedRank = ref<Rank | null>(null);

function move(piece: Piece, file: File, rank: Rank): boolean {
  let newPosition = new Position(file, rank);
  console.log(newPosition);
  alert(piece.canMoveTo(newPosition));
  return true;
}
</script>

<template>
  {{ game }}
  <div style="flex">
    <p>move:</p>
    <select
      v-for="currentGame of game"
      v-model="selectedPiece"
      name="piece select"
    >
      <option v-for="piece in currentGame" :value="piece">
        {{ piece["color"] }} {{ piece["constructor"]["name"] }}
      </option>
    </select>
    <p>to:</p>
    <select v-model="selectedRank">
      <option v-for="rank in 8">{{ rank }}</option>
    </select>
    <select v-model="selectedFile">
      <option v-for="file of letters">{{ file }}</option>
    </select>
    <button @click="move(selectedPiece, selectedFile, selectedRank)">
      Move
    </button>
  </div>
  {{ selectedPiece }}
</template>

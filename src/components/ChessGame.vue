<script setup lang="ts">
import { ref } from "vue";

import { File, Rank } from "../utils/structs/sets"

import { Position } from "../utils/structs/position";
import { Piece } from "../utils/structs/piece"

import { Bishop } from "../utils/structs/pieces/bishop"
import { King } from "../utils/structs/pieces/king"
import { Knight } from "../utils/structs/pieces/knight"
import { Pawn } from "../utils/structs/pieces/pawn"
import { Queen } from "../utils/structs/pieces/queen"
import { Rook } from "../utils/structs/pieces/rook"


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

<script setup lang="ts">
import { ref } from "vue";

import { File, Rank } from "../utils/structs/sets"
import { Game } from "../utils/structs/game"

import { Position } from "../utils/structs/position";
import { Piece } from "../utils/structs/piece"


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

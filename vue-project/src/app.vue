<script setup>
import { ref, computed, reactive } from 'vue';
import GameBrain from './gamebrain';
import board from './components/board.vue';

const game = reactive(new GameBrain);

</script>

<template>
  <GameBoard :board="game.board"></GameBoard>
</template>

<style scoped></style>

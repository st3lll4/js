<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { useGameStore } from '../stores/gameStore';
import { useUserStore } from '../stores/userstore';

const gameStore = useGameStore();
const userStore = useUserStore();

const board = reactive(gameStore.board);

onMounted(() => {
    console.log(gameStore.board)
});


</script>

<template>
  <div class="board">
    <div v-for="(row, rowIndex) in gameStore.board" :key="rowIndex" class="row">
      <div v-for="(col, columnIndex) in gameStore.board" :key="`${rowIndex},${columnIndex}`" :class="['col', {
        'grid-sq': gameStore.isInGrid(rowIndex, columnIndex)
      }]" @click="gameStore.makeAMove(rowIndex, columnIndex)">
        {{ board[rowIndex][columnIndex] || '' }}
      </div>
    </div>
  </div>
</template>

<style scoped>

.board {
  margin-top: 3rem;
}

.row {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
}

.col {
  min-height: 4rem;
  max-width: 4rem;
  margin: 0.1rem;
  border-radius: 0.2rem;
  background-color: #D5E1F7;
  font-size: 3rem;
  color: #3C75D9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 200%;
}

.grid-sq {
  background-color: #3C75D9;
  color: #ecf3ff;
}

</style>
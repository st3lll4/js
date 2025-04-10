<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useGameStore } from '../stores/gameStore';
import { useCanMove } from '../composables/gameStatus';
import router from '../router';
import { useRoute } from 'vue-router';

const route = useRoute(); 

const { canMove } = useCanMove(); 
// todo: midagi on vaja, mis muudaks seda canmove, mingi watcher mis vaatab iga kord kui ta muutub, 
// siis kas ta on AI ja kas gamemode klapib
// ja kui on siis on false ja muidu on true
// ja gamestores ka

onMounted(() => {
  const gameMode = route.params.gamemode;
  if (gameMode === 'singleplayer') {
    gameStore.singlePlayer = true;
  } else if (gameMode === 'multiplayer') {
    gameStore.singlePlayer = false;
  }
})


const gameStore = useGameStore();

function handleMove(row : number, col : number) {
  gameStore.makeAMove(row, col);
}

</script>

<template>
  <div class="board">
    <div v-for="(row, rowIndex) in gameStore.board" :key="rowIndex" class="row">
      <div v-for="(col, columnIndex) in gameStore.board" 
        :key="`${rowIndex},${columnIndex}`" 
        :class="['col', {
        'grid-sq': gameStore.isInGrid(rowIndex, columnIndex)
        }]" 
        @click="handleMove(rowIndex, columnIndex)">
          {{ gameStore.board[rowIndex][columnIndex] || '' }}
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
  cursor: crosshair;
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
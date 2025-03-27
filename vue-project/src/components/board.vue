<script setup lang="ts">
import { onMounted } from 'vue'
import { useGameStore } from '@/stores/gameStore';
import { useUserStore } from '@/stores/userstore';

const gameStore = useGameStore();

const = reactive(gameStore.board);

onMounted(() => {
    console.log(gameStore.board)
});


</script>

<template>
  <div class="board">
    <div v-for="(row, rowIndex) in gameStore.board" :key="rowIndex" class="row">
      <div v-for="(col, columnIndex) in gameStore.board" :key="`${rowIndex},${columnIndex}`" :class="['col', {
        'grid-sq': gameStore.isInGrid
      }]" @click="gameStore.makeAMove(rowIndex, columnIndex)">
        {{  || '' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.col {
  min-height: 5rem;
  max-width: 5rem;
  margin: 0.1rem;
  border-radius: 0.5rem;
  background-color: var(--lighter-blue);
  font-size: 3rem;
  text-align: center;
  color: var(--darker-blue);
}

.small-btn {
  display: flex;
  margin: 0.3rem;
  min-height: 3rem;
  min-width: 3rem;
  max-width: fit-content;
  border-radius: 0.2rem;
  background: var(--button);
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  font-size: x-large;
}

.big-btn {
  font-size: 1rem;
  min-width: 3rem;
  cursor: pointer;
}

.grid-sq {
  background-color: var(--lavender);
}

.grid {
  background-color: var(--darker-blue);
}

</style>
<script setup lang="ts">
import { onMounted } from 'vue'

interface Props {
    board: string[][]
}

const props = defineProps<Props>();

onMounted(() => {
    console.log(props.board)
});

</script>

<template>
    teeree
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
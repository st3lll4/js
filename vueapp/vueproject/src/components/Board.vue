<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';

let board = reactive([[], [], []])

</script>

<template>
    <div class="board">
        <div class="row grid-sq" v-for="row, index in board"></div>
        <div class="col grid-sq" v-for="col, index in board"></div>
    </div>
</template>

<style scoped>
.card {
    justify-content: center;
}

.grid-sq {
    background-color: var(--lavender);
}

.grid {
    background-color: var(--darker-blue);
}

body {
    font-family: "Gill Sans MT", sans-serif;
}

:root {
    --lavender: #cdb4db;
    --dark-pink: #ff1b63;
    --darker-blue: #0284f6;
    --lighter-blue: #a2d2ff;
    --button: #8ac8fb;
}

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
</style>
<script setup lang="ts">
import { useGameStore } from '../stores/gameStore';
import router from '../router';
import Timer from './Timer.vue';
import { useGameStatus } from '../composables/gameStatus';

const { gameStarted } = useGameStatus();

const gameStore = useGameStore();


</script>

<template>
    <div class='wrapper'>
        <div class="quit-container">
            <a @click="() => { gameStore.resetGame(); router.push('/'); }" class="btn">quit</a>
        </div>
        <div v-if="gameStore.xPieces != 1" class="ui-info"> 
           X has
           <div class="player-pieces-left">{{ gameStore.xPieces }} </div>
           pieces
        </div>
        <div v-else class="ui-info"> 
           X has
           <div class="player-pieces-left">{{ gameStore.xPieces }} </div>
           piece
        </div>
        <Timer />
        <div v-if="gameStarted" class="ui-info middle">
            {{ gameStore.movingPlayer }} - MOVE!
        </div>
        <div class="ui-info middle" v-else> 
            press start to play
        </div>
        <div class="arrows">
            <img @click="gameStore.moveGrid('up')" src="../assets/images/up.png" alt="up">
            <div class="horizontal-arrows">
                <img @click="gameStore.moveGrid('left')" src="../assets/images/left.png" alt="left">
                <img @click="gameStore.moveGrid('right')" src="../assets/images/right.png" alt="right">
            </div>
            <img @click="gameStore.moveGrid('down')" src="../assets/images/down.png" alt="down">
        </div>
        <div v-if="gameStore.OPieces != 1" class="ui-info">
            O has
            <div class="player-pieces-left">{{ gameStore.OPieces }} </div>
           pieces
        </div>
        <div v-else class="ui-info">
            O has
            <div class="player-pieces-left">{{ gameStore.OPieces }} </div>
           piece
        </div>
    </div>
</template>

<style scoped>

.wrapper {
    width: 100%;
    position: relative;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
}

.ui-info {
    text-align: center;
    color: #3C75D9;
}

.middle {
    min-width: 8rem;
}

.player-pieces-left {
    font-size: xx-large;
    color: #0e48ad;
}

.quit-container {
    position: absolute;
    left: 1rem;
    top: 0;
    cursor: pointer;
}

.btn {
    background-color: rgb(77, 113, 232);
    color: white;
    border-radius: 0.3rem;
    padding: 0 1.5rem;
    font-size: 1.2rem;
    transition: 0.5s;
}

.btn:hover {
  background-color: rgb(150, 170, 234);
}

.arrows {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.horizontal-arrows {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 0.5rem 0;
}

img {
    cursor: pointer;
    max-width: 40px;
    max-height: 40px;
}
</style>

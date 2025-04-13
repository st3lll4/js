<script setup lang="ts">
import { useGameStore } from '../stores/gameStore';
import router from '../router';
import Timer from './Timer.vue';
import { useGameStatus } from '../composables/gameStatus';
import { useCanMove } from '../composables/gameStatus';

const { gameStarted } = useGameStatus();

const gameStore = useGameStore();

const { canMove } = useCanMove(); 


</script>

<template><div class="quit-container">
            <a @click="() => { gameStore.resetGame(); router.push('/'); }" class="btn">quit</a>
        </div>
    <div class='wrapper'>
        
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
            click on timer to start
        </div>
        <div :class="['arrows',
            {
                'disabled': !canMove
            }
            ]">
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    padding: 0.5 rem;
    background-color: #E6ECFF;
    margin-top: 1rem;
    border-radius: 0.6rem;
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

@media screen and (max-width: 600px) {
    .wrapper { 
        gap: 1rem;
    }
    img {
        max-width: 20px;
    }
    .ui-info {
        font-size: smaller;
        min-width: 3rem;
    }
}

.disabled {
    pointer-events: none;
}

</style>

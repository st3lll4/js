<script setup lang="ts">
import { ref, onUnmounted, watch } from 'vue';
import { useGameStore } from '../stores/gameStore';
import { useGameStatus, useCanMove } from '../composables/gameStatus';
import Swal from 'sweetalert2'
import router from '../router';

const { gameStarted } = useGameStatus();

watch(gameStarted, (gameStarted) => {
    if (gameStarted) {
        startTimer();
    }
});

const gameStore = useGameStore();

const countdown = ref(5);
const isGlowing = ref(false);

let timerInterval: ReturnType<typeof setInterval> | undefined = undefined;
// “TypeScript, please figure out what type setInterval returns and use that as the type for my timerInterval variable.”

function startTimer(): void {
    gameStarted.value = true
    stopTimer();

    timerInterval = setInterval(() => {
        countdown.value--;

        if (countdown.value === 0) {
            Swal.fire("you didnt move, sleepy! switching players")
            gameStore.switchPlayer();
            countdown.value = 5;
        }

        if (gameStore.singlePlayer && gameStore.movingPlayer === "O") {
            gameStore.makeAIMove();
            countdown.value = 5;
        }

        if (gameStore.gameOver) {
            stopTimer();
        }
    }, 1000);
}

function stopTimer(): void {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = undefined;
    }
}

function startGame() {
    gameStore.resetGame(); // miskiparast ei toota
    isGlowing.value = true;

    gameStarted.value = true;

    setTimeout(() => {
        isGlowing.value = false;
    }, 500);
}

onUnmounted(() => {
    stopTimer();
    gameStore.resetGame();
    gameStarted.value = false;
});

const endOfGameSwal = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-light'
    },
    buttonsStyling: false
})

watch(() => gameStore.gameOver, (gameOver) => {
    if (gameOver) {
        stopTimer();
        endOfGameSwal.fire({
            title: `CONGRATS, ${gameStore.winner}!`,
            text: `Better luck (skill) next time, ${gameStore.winner === "X" ? "O" : "X"}!`,
            width: 600,
            showCancelButton: true,
            cancelButtonText: 'Back to menu',
            confirmButtonText: "Just one more game",
            reverseButtons: true,
            padding: "3em",
            color: "#716add",
            backdrop: `
    rgba(0,0,123,0.4)
    url("./nyan-cat.gif")
    left top
    no-repeat
  `
        }).then((result) => {
            if (result.isConfirmed) {
                gameStore.resetGame();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                router.push('/');
            }
        });
        gameStarted.value = false;
    }
});

watch(() => gameStore.movingPlayer, (newvalue) => {
    if (newvalue) {
        startTimer();
    }
})

watch(() => gameStore.board, (newvalue) => {
    if (gameStore.board !== ([[], [], [], [], []])) {
        startTimer();
    }
})

watch(() => gameStore.removingPiece, (removing) => {
    if (removing) {
        stopTimer();
    }
    if (!removing) {
        startTimer();
    }
})
</script>

<template>
    <div v-if="gameStarted" :class="['timer', { 'glow-effect': isGlowing }]">
        {{ countdown }}
    </div>
    <div v-else @click="startGame" class="timer icon">
        <img src="../assets/images/clock-line-icon.png" alt="clock">
    </div>
</template>

<style scoped>
.timer {
    font-size: x-large;
    color: white;
    background-color: rgb(127, 152, 234);
    padding: 1rem 1.7rem;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s ease;
    position: relative;
}

.timer:hover {
    background-color: #3C75D9;
}

.icon {
    padding: 0;
}

img {
    max-width: 60px;
}

.glow-effect {
    animation: glow 0.5s ease-in-out;
}

@keyframes glow {
    0% {
        box-shadow: 0 0 0 0 rgba(60, 117, 217, 0.7);
    }

    50% {
        box-shadow: 0 0 25px 10px rgba(60, 117, 217, 0.9);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(60, 117, 217, 0);
    }
}

@media screen and (max-width: 600px) {
    .timer {
        font-size: smaller;
        padding: 0.3rem 0.7rem;
        background-color: white;
        color: rgba(16, 80, 192, 0.9);
    }

    img {
        max-width: 30px;
    }

    .icon {
        background-color: rgb(127, 152, 234);
        padding: 0;
    }
}
</style>
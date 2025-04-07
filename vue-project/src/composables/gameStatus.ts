import { ref } from "vue";

const gameStarted = ref(false);
const canMove = ref(false);

export function useGameStatus() {
    return {
        gameStarted
    };
  }

export function useCanMove() {
    return {
        canMove
    };
}
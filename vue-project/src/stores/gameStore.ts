import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameData', () => {
    type Player = "X" | "O";

    const board = ref<(Player | undefined)[][]>([[], [], [], [], []])
  
    const gameOn = ref(false)
    const gameOver = ref(false)
    const movingPlayer = ref<Player>("X")
    const singlePlayer = ref(true)
  
    const xPieces = ref(4)
    const OPieces = ref(4)
  
    const gridStartX = ref(1)
    const gridStartY = ref(1)
  
    const moveMade = ref(false)

    const currentGrid = computed(() => ({
        startX: gridStartX.value,
        startY: gridStartY.value
    }))

    function toggleGameMode() : void {
            singlePlayer.value = !singlePlayer.value;
        }
    
    function makeAMove(x : number, y : number) : void {
        if (board.value[x][y] === undefined && isInGrid(x, y) &&
            ((movingPlayer.value === "X" && xPieces.value > 0) || (movingPlayer.value === "O" && OPieces.value > 0))) {
                board.value[x][y] = movingPlayer.value;
            if (movingPlayer.value === "X") {
                xPieces.value--;
            } else {
                OPieces.value--;
            }
            
            if (this.checkWin()) {
                gameOver.value = true;
                alert(`Player ${movingPlayer} wins!`);
            }

            switchPlayer();
        } else {
            showMoveError();
        }
    }
    
    function removePiece(x : number, y : number) : void {
        board.value[x][y] = undefined;
            if (movingPlayer.value === "X") {
                xPieces.value++;
            } else {
                OPieces.value++;
            }
        }
    
    function isInGrid(x : number, y : number) : boolean {
        return x >= gridStartX.value && x < gridStartX.value + 3 && 
            y >= gridStartY.value && y < gridStartY.value + 3
    }
    
    function moveGrid(direction: 'up' | 'down' | 'left' | 'right') {
        if (xPieces.value <= 2 && OPieces.value <= 2) {
            switch (direction) {
                case 'up':
                    if (gridStartX.value > 0) gridStartX.value--
                    break
                case 'down':
                    if (gridStartX.value + 3 < 5) gridStartX.value++
                    break
                case 'left':
                    if (gridStartY.value > 0) gridStartY.value--
                    break
                case 'right':
                    if (gridStartY.value + 3 < 5) gridStartY.value++
                    break
            }
            switchPlayer()
        }
    }
    
    function showMoveError() : void {
            alert("You cant move there lil bro.");
        }
    
    function switchPlayer() : void {
        movingPlayer.value = movingPlayer.value === "X" ? "O" : "X";
        moveMade.value = true;
    }
    
    function checkWin() : Player | null {
        const checkPlayer = (player : Player) => {

            for (let i = gridStartX.value; i < gridStartX.value + 3; i++) {
                console.log(board.value[i][gridStartY.value])
                if (board.value[i][gridStartY.value] === player &&
                    board.value[i][gridStartY.value + 1] === player &&
                    board.value[i][gridStartY.value + 2] === player) {
                    return true;
                }
            }

            for (let j = gridStartY.value; j < gridStartY.value + 3; j++) {
                if (board.value[gridStartX.value][j] === player &&
                    board.value[gridStartX.value + 1][j] === player &&
                    board.value[gridStartX.value + 2][j] === player) {
                    return true;
                }
            }

            if (board.value[gridStartX.value][gridStartY.value] === player &&
                board.value[gridStartX.value + 1][gridStartY.value + 1] === player &&
                board.value[gridStartX.value + 2][gridStartY.value + 2] === player) {
                return true;
            }

            if (board.value[gridStartX.value][gridStartY.value + 2] === player &&
                board.value[gridStartX.value + 1][gridStartY.value + 1] === player &&
                board.value[gridStartX.value + 2][gridStartY.value] === player) {
                return true;
            }

            return false;
        };

        if (checkPlayer("X")) {
            gameOver.value = true;
            return "X";
        }

        if (checkPlayer("O")) {
            gameOver.value = true;
            return "O";
        }
        return null;
    }
    
    function makeAIMove() : void {
        let rndX = getRandomInRange(gridStartX.value, gridStartX.value + 2);
        let rndY = getRandomInRange(gridStartY.value, gridStartY.value + 2);

        let rnd = getRandomInRange(0, 3);
        const directions = ["down", "up", "left", "right"];
        let rndDirection = directions[rnd];

        if (!gameOver.value) {
            if (OPieces.value > 0) {
                if (board.value[gridStartX.value + 1][gridStartY.value + 1] === undefined) {
                    board.value[gridStartX.value + 1][gridStartY.value + 1] = "O"; // tries to take the middle
                    OPieces.value--;
                }

                else if (board.value[gridStartX.value][gridStartY.value] === undefined) {
                    board.value[gridStartX.value][gridStartY.value] = "O"; // tries to take the first corner
                    OPieces.value--;
                }

                else if (board.value[gridStartX.value + 2][gridStartY.value] === undefined) {
                    board.value[gridStartX.value + 2][gridStartY.value] = "O"; // tries to take the second corner
                    OPieces.value--;
                }

                else if (board.value[gridStartX.value + 2][gridStartY.value + 2] === undefined) {
                    board.value[gridStartX.value + 2][gridStartY.value + 2] = "O"; // tries to take the last corner
                    OPieces.value--;
                }

                else if (board.value[rndX][rndY] === undefined) {
                    board.value[rndX][rndY] = "O"; // tries to make a random move
                    OPieces.value--;
                }
                switchPlayer();
            }

            else if (xPieces.value <= 2 && OPieces.value <= 2) { // tries to move the grid
                if (rndDirection === "up" && gridStartX.value > 0) {
                    moveGrid("up");
                }
                else if (rndDirection === "down" && gridStartX.value + 3 < 5) {
                    moveGrid("down");
                }
                else if (rndDirection === "right" && gridStartY.value + 3 < 5) {
                    moveGrid("right");

                }
                else if (rndDirection === "left" && gridStartY.value > 0) {
                    moveGrid("left");
                }
                else {
                    // if it gets here, ai will "forget to move" and the move will just timeout and skip
                    return;
                }
            }
            else {
                if (board.value[rndX][rndY] === "O") { // tries to remove and place a rnd piece
                    removePiece(rndX, rndY);
                    rndX = getRandomInRange(gridStartX.value, gridStartX.value + 2);
                    rndY = getRandomInRange(gridStartY.value, gridStartY.value + 2);
                    if (board.value[rndX][rndY] === undefined) {
                        board.value[rndX][rndY] = "O";
                        switchPlayer();
                    }
                } else {
                    // if it gets here, ai will "forget to move" and the move will just timeout and skip
                    return;
                }
            }
        }
        }
    
    function getRandomInRange(min : number, max : number) : number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function resetGame() : void {
        board.value = [[], [], [], [], []];
        gameOn.value = false;
        gameOver.value = false;
        movingPlayer.value = "X";
        xPieces.value = 4;
        OPieces.value = 4;
        gridStartX.value = 1;
        gridStartY.value = 1;
        moveMade.value = false;
    }

    return {
    board,
    gameOn,
    gameOver,
    movingPlayer,
    singlePlayer,
    xPieces,
    OPieces,
    gridStartX,
    gridStartY,
    moveMade,
    currentGrid,
    toggleGameMode,
    makeAMove,
    isInGrid,
    removePiece,
    moveGrid,
    checkWin,
    makeAIMove,
    resetGame
}
})

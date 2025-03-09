export type Player = "X" | "O";

export class GameBrain {
    #board: (Player | undefined)[][] = [[], [], [], [], []]

    gameOn: boolean = false;
    gameOver: boolean = false;
    movingPlayer: Player = "X";
    singlePlayer: boolean = true;

    xPieces: number = 4;
    OPieces: number = 4;

    gridStartX: number = 1;
    gridStartY: number = 1;

    moveMade: boolean = false;

    get board() : (Player | undefined)[][] {
        return this.#board;
    }

    toggleGameMode() : void {
        this.singlePlayer = !this.singlePlayer;
    }

    makeAMove(x : number, y : number) : void {
        if (this.#board[x][y] === undefined && this.isInGrid(x, y) &&
            ((this.movingPlayer === "X" && this.xPieces > 0) || (this.movingPlayer === "O" && this.OPieces > 0))) {
            this.#board[x][y] = this.movingPlayer;
            if (this.movingPlayer === "X") {
                this.xPieces = this.xPieces - 1;
            } else {
                this.OPieces = this.OPieces - 1;
            }
            this.switchPlayer();
        } else {
            this.showMoveError();
        }
    }

    removePiece(x : number, y : number) : void {
        this.#board[x][y] = undefined;
        if (this.movingPlayer === "X") {
            this.xPieces++;
        } else {
            this.OPieces++;
        }
    }

    isInGrid(x : number, y : number) : boolean {
        return x >= this.gridStartX && x < this.gridStartX + 3 && y >= this.gridStartY && y < this.gridStartY + 3
    }

    moveLeft() : void {
        if (this.gridStartY > 0 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartY--;
            this.switchPlayer();
        } else {
            this.showMoveError();
        }
    }

    moveRight() : void {
        if (this.gridStartY + 3 < 5 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartY++;
            this.switchPlayer();
        } else {
            this.showMoveError();
        }
    }

    moveUp() : void {
        if (this.gridStartX > 0 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartX--;
            this.switchPlayer();
        } else {
            this.showMoveError();
        }
    }

    moveDown() : void {
        if (this.gridStartX + 3 < 5 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartX++;
            this.switchPlayer();
        } else {
            this.showMoveError();
        }
    }

    showMoveError() : void {
        alert("You cant move there lil bro.");
    }

    switchPlayer() : void {
        this.movingPlayer = this.movingPlayer === "X" ? "O" : "X";
        this.moveMade = true;
    }

    checkWin() : Player | null {
        const checkPlayer = (player : Player) => {

            for (let i = this.gridStartX; i < this.gridStartX + 3; i++) {
                if (this.#board[i][this.gridStartY] === player &&
                    this.#board[i][this.gridStartY + 1] === player &&
                    this.#board[i][this.gridStartY + 2] === player) {
                    return true;
                }
            }

            for (let j = this.gridStartY; j < this.gridStartY + 3; j++) {
                if (this.#board[this.gridStartX][j] === player &&
                    this.#board[this.gridStartX + 1][j] === player &&
                    this.#board[this.gridStartX + 2][j] === player) {
                    return true;
                }
            }

            if (this.#board[this.gridStartX][this.gridStartY] === player &&
                this.#board[this.gridStartX + 1][this.gridStartY + 1] === player &&
                this.#board[this.gridStartX + 2][this.gridStartY + 2] === player) {
                return true;
            }

            if (this.#board[this.gridStartX][this.gridStartY + 2] === player &&
                this.#board[this.gridStartX + 1][this.gridStartY + 1] === player &&
                this.#board[this.gridStartX + 2][this.gridStartY] === player) {
                return true;
            }

            return false;
        };

        if (checkPlayer("X")) {
            this.gameOver = true;
            return "X";
        }

        if (checkPlayer("O")) {
            this.gameOver = true;
            return "O";
        }
        return null;
    }

    makeAIMove() : void {
        let rndX = this.getRandomInRange(this.gridStartX, this.gridStartX + 2);
        let rndY = this.getRandomInRange(this.gridStartY, this.gridStartY + 2);

        let rnd = this.getRandomInRange(0, 3);
        const directions = ["down", "up", "left", "right"];
        let rndDirection = directions[rnd];

        if (!this.gameOver) {
            if (this.OPieces > 0) {
                if (this.#board[this.gridStartX + 1][this.gridStartY + 1] === undefined) {
                    this.#board[this.gridStartX + 1][this.gridStartY + 1] = "O"; // tries to take the middle
                    this.OPieces--;
                }

                else if (this.#board[this.gridStartX][this.gridStartY] === undefined) {
                    this.#board[this.gridStartX][this.gridStartY] = "O"; // tries to take the first corner
                    this.OPieces--;
                }

                else if (this.#board[this.gridStartX + 2][this.gridStartY] === undefined) {
                    this.#board[this.gridStartX + 2][this.gridStartY] = "O"; // tries to take the second corner
                    this.OPieces--;
                }

                else if (this.#board[this.gridStartX + 2][this.gridStartY + 2] === undefined) {
                    this.#board[this.gridStartX + 2][this.gridStartY + 2] = "O"; // tries to take the last corner
                    this.OPieces--;
                }

                else if (this.#board[rndX][rndY] === undefined) {
                    this.#board[rndX][rndY] = "O"; // tries to make a random move
                    this.OPieces--;
                }
                this.switchPlayer();
            }

            else if (this.xPieces <= 2 && this.OPieces <= 2) { // tries to move the grid
                if (rndDirection === "up" && this.gridStartX > 0) {
                    this.moveUp();
                }
                else if (rndDirection === "down" && this.gridStartX + 3 < 5) {
                    this.moveDown();
                }
                else if (rndDirection === "right" && this.gridStartY + 3 < 5) {
                    this.moveRight();

                }
                else if (rndDirection === "left" && this.gridStartY > 0) {
                    this.moveLeft();
                }
                else {
                    // if it gets here, ai will "forget to move" and the move will just timeout and skip
                    return;
                }
            }
            else {
                if (this.#board[rndX][rndY] === "O") { // tries to remove and place a rnd piece
                    this.removePiece(rndX, rndY);
                    rndX = this.getRandomInRange(this.gridStartX, this.gridStartX + 2);
                    rndY = this.getRandomInRange(this.gridStartY, this.gridStartY + 2);
                    if (this.#board[rndX][rndY] === undefined) {
                        this.#board[rndX][rndY] = "O";
                        this.switchPlayer();
                    }
                } else {
                    // if it gets here, ai will "forget to move" and the move will just timeout and skip
                    return;
                }
            }
        }
    }

    getRandomInRange(min : number, max : number) : number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    resetGame() : void {
        this.#board = [[], [], [], [], []];
        this.gameOn = false;
        this.gameOver = false;
        this.movingPlayer = "X";
        this.xPieces = 4;
        this.OPieces = 4;
        this.gridStartX = 1;
        this.gridStartY = 1;
        this.moveMade = false;
    }
}
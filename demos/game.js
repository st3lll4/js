import * as UI from "./ui.js";

export class GameBrain {
    #board = [[], [], [], [], []]

    movingPlayer = "X"

    xPieces = 4;
    OPieces = 4;

    gridStartX = 1;
    gridStartY = 1;

    get board() {
        return this.#board;
    }

    makeAMove(x, y) {
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

    removePiece(x ,y) {
        this.#board[x][y] = undefined;
        console.log(this.#board[x][y])
        if (this.movingPlayer === "X") {
            this.xPieces++;
        } else {
            this.OPieces++;
        }
    }

    isInGrid(x, y) {
        return x >= this.gridStartX && x < this.gridStartX + 3 && y >= this.gridStartY && y < this.gridStartY + 3
    }

    moveLeft() {
        if (this.gridStartY > 0 && this.xPieces <= 2 && this.OPieces <= 2) { 
            this.gridStartY--;
            this.switchPlayer();
        } else {
            this.showMoveError();
        }
    }

    moveRight() {
        if (this.gridStartY + 3 < 5 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartY++;
            this.switchPlayer();
        } else {
            this.showMoveError();
        }
    }

    moveUp() {
        if (this.gridStartX > 0 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartX--;
            this.switchPlayer();
        } else {
            this.showMoveError();
        }
    }

    moveDown() {
        if (this.gridStartX + 3 < 5 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartX++;
            this.switchPlayer();
        } else {
            this.showMoveError();
        }
    }

    showMoveError() {
        alert("You cant move there lil bro.");
    }

    switchPlayer() {
        this.movingPlayer = this.movingPlayer === "X" ? "O" : "X";
    }

}
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _GameBrain_board;
export class GameBrain {
    constructor() {
        _GameBrain_board.set(this, [[], [], [], [], []]);
        this.gameOn = false;
        this.gameOver = false;
        this.movingPlayer = "X";
        this.singlePlayer = true;
        this.xPieces = 4;
        this.OPieces = 4;
        this.gridStartX = 1;
        this.gridStartY = 1;
        this.moveMade = false;
    }
    get board() {
        return __classPrivateFieldGet(this, _GameBrain_board, "f");
    }
    toggleGameMode() {
        this.singlePlayer = !this.singlePlayer;
    }
    makeAMove(x, y) {
        if (__classPrivateFieldGet(this, _GameBrain_board, "f")[x][y] === undefined && this.isInGrid(x, y) &&
            ((this.movingPlayer === "X" && this.xPieces > 0) || (this.movingPlayer === "O" && this.OPieces > 0))) {
            __classPrivateFieldGet(this, _GameBrain_board, "f")[x][y] = this.movingPlayer;
            if (this.movingPlayer === "X") {
                this.xPieces = this.xPieces - 1;
            }
            else {
                this.OPieces = this.OPieces - 1;
            }
            this.switchPlayer();
        }
        else {
            this.showMoveError();
        }
    }
    removePiece(x, y) {
        __classPrivateFieldGet(this, _GameBrain_board, "f")[x][y] = undefined;
        if (this.movingPlayer === "X") {
            this.xPieces++;
        }
        else {
            this.OPieces++;
        }
    }
    isInGrid(x, y) {
        return x >= this.gridStartX && x < this.gridStartX + 3 && y >= this.gridStartY && y < this.gridStartY + 3;
    }
    moveLeft() {
        if (this.gridStartY > 0 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartY--;
            this.switchPlayer();
        }
        else {
            this.showMoveError();
        }
    }
    moveRight() {
        if (this.gridStartY + 3 < 5 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartY++;
            this.switchPlayer();
        }
        else {
            this.showMoveError();
        }
    }
    moveUp() {
        if (this.gridStartX > 0 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartX--;
            this.switchPlayer();
        }
        else {
            this.showMoveError();
        }
    }
    moveDown() {
        if (this.gridStartX + 3 < 5 && this.xPieces <= 2 && this.OPieces <= 2) {
            this.gridStartX++;
            this.switchPlayer();
        }
        else {
            this.showMoveError();
        }
    }
    showMoveError() {
        alert("You cant move there lil bro.");
    }
    switchPlayer() {
        this.movingPlayer = this.movingPlayer === "X" ? "O" : "X";
        this.moveMade = true;
    }
    checkWin() {
        const checkPlayer = (player) => {
            for (let i = this.gridStartX; i < this.gridStartX + 3; i++) {
                if (__classPrivateFieldGet(this, _GameBrain_board, "f")[i][this.gridStartY] === player &&
                    __classPrivateFieldGet(this, _GameBrain_board, "f")[i][this.gridStartY + 1] === player &&
                    __classPrivateFieldGet(this, _GameBrain_board, "f")[i][this.gridStartY + 2] === player) {
                    return true;
                }
            }
            for (let j = this.gridStartY; j < this.gridStartY + 3; j++) {
                if (__classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX][j] === player &&
                    __classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 1][j] === player &&
                    __classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 2][j] === player) {
                    return true;
                }
            }
            if (__classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX][this.gridStartY] === player &&
                __classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 1][this.gridStartY + 1] === player &&
                __classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 2][this.gridStartY + 2] === player) {
                return true;
            }
            if (__classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX][this.gridStartY + 2] === player &&
                __classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 1][this.gridStartY + 1] === player &&
                __classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 2][this.gridStartY] === player) {
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
    makeAIMove() {
        let rndX = this.getRandomInRange(this.gridStartX, this.gridStartX + 2);
        let rndY = this.getRandomInRange(this.gridStartY, this.gridStartY + 2);
        let rnd = this.getRandomInRange(0, 3);
        const directions = ["down", "up", "left", "right"];
        let rndDirection = directions[rnd];
        if (!this.gameOver) {
            if (this.OPieces > 0) {
                if (__classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 1][this.gridStartY + 1] === undefined) {
                    __classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 1][this.gridStartY + 1] = "O";
                    this.OPieces--;
                }
                else if (__classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX][this.gridStartY] === undefined) {
                    __classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX][this.gridStartY] = "O";
                    this.OPieces--;
                }
                else if (__classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 2][this.gridStartY] === undefined) {
                    __classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 2][this.gridStartY] = "O";
                    this.OPieces--;
                }
                else if (__classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 2][this.gridStartY + 2] === undefined) {
                    __classPrivateFieldGet(this, _GameBrain_board, "f")[this.gridStartX + 2][this.gridStartY + 2] = "O";
                    this.OPieces--;
                }
                else if (__classPrivateFieldGet(this, _GameBrain_board, "f")[rndX][rndY] === undefined) {
                    __classPrivateFieldGet(this, _GameBrain_board, "f")[rndX][rndY] = "O";
                    this.OPieces--;
                }
                this.switchPlayer();
            }
            else if (this.xPieces <= 2 && this.OPieces <= 2) {
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
                    return;
                }
            }
            else {
                if (__classPrivateFieldGet(this, _GameBrain_board, "f")[rndX][rndY] === "O") {
                    this.removePiece(rndX, rndY);
                    rndX = this.getRandomInRange(this.gridStartX, this.gridStartX + 2);
                    rndY = this.getRandomInRange(this.gridStartY, this.gridStartY + 2);
                    if (__classPrivateFieldGet(this, _GameBrain_board, "f")[rndX][rndY] === undefined) {
                        __classPrivateFieldGet(this, _GameBrain_board, "f")[rndX][rndY] = "O";
                        this.switchPlayer();
                    }
                }
                else {
                    return;
                }
            }
        }
    }
    getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    resetGame() {
        __classPrivateFieldSet(this, _GameBrain_board, [[], [], [], [], []], "f");
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
_GameBrain_board = new WeakMap();
//# sourceMappingURL=game.js.map
export type Player = "X" | "O";

export class GameBrain {
    #board: (Player | undefined)[][] = [[], [], []]

    gameOn: boolean = false;
    gameOver: boolean = false;
    movingPlayer: Player = "X";
    moveMade: boolean=false;
    
    get board() : (Player | undefined)[][] {
        return this.#board;
    }


    makeAMove(x : number, y : number) : void {
        if (this.#board[x][y] === undefined &&
            (this.movingPlayer === "X" || this.movingPlayer === "O")) {
            this.#board[x][y] = this.movingPlayer;
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
        const a: Player = this.movingPlayer;
              
        for (let i = 0; i < 3; i++) {
          if (this.#board[i].every(cell => cell === a)) {
            this.gameOver = true;
            return this.movingPlayer;
          }              
          if (this.#board.every(row => row[i] === a)) {
            this.gameOver = true;
            return this.movingPlayer;
        }
        }
          
        if (this.#board[0][0] === a && this.#board[1][1] === a && this.#board[2][2] === a) {
            this.gameOver = true;
            return this.movingPlayer;
        }

        if (this.#board[0][2] === a && this.#board[1][1] === a && this.#board[2][0] === a) {
            this.gameOver = true;
            return this.movingPlayer;   
        }

        return null;
    }

    resetGame() : void {
        this.#board = [[], [], []];
        this.gameOn = false;
        this.gameOver = false;
        this.movingPlayer = "X";
        
        this.moveMade = false;
    }
}
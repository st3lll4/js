import { GameBrain, type Player } from "./game";
import * as UI from "./ui";

let game : GameBrain = new GameBrain();

let header : HTMLHeadingElement = UI.getHeader();
document.body.appendChild(header);

let timer : HTMLDivElement = UI.getTimer(game);
document.body.appendChild(timer);

let buttons : HTMLDivElement = UI.getButtons(game);
document.body.appendChild(buttons);

let board : HTMLDivElement = UI.getBoard(game, game.board, updateInfo);
document.body.appendChild(board);

export function updateBoard(): void {
    let oldBoard: HTMLElement | null = document.getElementById("board");
    if (oldBoard) {
        oldBoard.remove();
    }
    let newBoard: HTMLElement = UI.getBoard(game, game.board, updateInfo);
    document.body.appendChild(newBoard);
}

function updateInfo(x : number, y : number, e : MouseEvent) : void {
    if (game.board[x][y] === undefined) {
        game.makeAMove(x, y);
        (e.target as HTMLElement).innerHTML = game.board[x][y] || "&nbsp;";
    } else if (game.board[x][y] === game.movingPlayer) {
        game.removePiece(x, y) 
    } else {
        game.showMoveError();
    }
    handleAIMove();
    let winner : Player | null = game.checkWin();
    if (winner && game.singlePlayer === false) {
        setTimeout(() => {
            alert(`Game over! ${winner} wins!`);
            console.log(winner);
        }, 100);
    }
    updateBoard();
}

export function handleAIMove() : void {
    if (game.singlePlayer === true && game.movingPlayer === "O" && !game.gameOver) {
        setTimeout(() => {
            game.makeAIMove();
            let winner : Player | null = game.checkWin();
            if (winner) {
                setTimeout(() => {
                    alert(`Game over! ${winner} wins!`);
                    console.log(winner);
                }, 100);
            }

        }, 1000);
    }
}

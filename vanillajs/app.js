import { GameBrain } from "./game.js";
import * as UI from "./ui.js";

let game = new GameBrain();

let header = UI.getHeader();
document.body.appendChild(header);

let timer = UI.getTimer(game);
document.body.appendChild(timer);

let buttons = UI.getButtons(game);
document.body.appendChild(buttons);

let board = UI.getBoard(game, game.board, updateInfo);
document.body.appendChild(board);

function updateInfo(x, y, e) {
    if (game.board[x][y] === undefined) {
        game.makeAMove(x, y);
        e.target.innerHTML = game.board[x][y] || "&nbsp;";
    } else if (game.board[x][y] === game.movingPlayer) {
        game.removePiece(x, y) // bugged kui eemaldad piece aga ei pane uut
    } else {
        game.showMoveError();
    }
    handleAIMove();
    let winner = game.checkWin();
    if (winner && game.singlePlayer === 0) {
        setTimeout(() => {
            alert(`Game over! ${winner} wins!`);
            console.log(winner);
        }, 100);
    }
    updateBoard();
}

export function handleAIMove() {
    if (game.singlePlayer === 1 && game.movingPlayer === "O" && !game.gameOver) {
        setTimeout(() => {
            game.makeAIMove();
            let winner = game.checkWin();
            if (winner) {
                setTimeout(() => {
                    alert(`Game over! ${winner} wins!`);
                    console.log(winner);
                }, 100);
            }
            updateBoard();
        }, 1000);
    }
}

export function updateBoard() {
    let oldBoard = document.getElementById("board");
    if (oldBoard) {
        oldBoard.remove();
    }
    let newBoard = UI.getBoard(game, game.board, updateInfo);
    document.body.appendChild(newBoard);
}
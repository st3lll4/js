import { GameBrain } from "./game.js";
import * as UI from "./ui.js";

let header = UI.getHeader();
document.body.appendChild(header);

let game = new GameBrain();

let buttons = UI.getButtons(game);
document.body.appendChild(buttons);

function updateInfo(x, y, e) {
    if (game.board[x][y] === undefined) {
        game.makeAMove(x, y);
        e.target.innerHTML = game.board[x][y] || "&nbsp;";
    } else if (game.board[x][y] === game.movingPlayer) {
        game.removePiece(x, y)
        // somehow make it impossible to move the grid when this has been
    } else {
        game.showMoveError();
    }            
    updateBoard();
}

export function updateBoard() {
    let oldBoard = document.getElementById("board");
    if (oldBoard) {
        oldBoard.remove();
    }
    let newBoard = UI.getBoard(game, game.board, updateInfo);
    document.body.appendChild(newBoard);
}

let board = UI.getBoard(game, game.board, updateInfo);
document.body.appendChild(board);
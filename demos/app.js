import { GameBrain } from "./game.js";
import * as UI from "./ui.js";

let header = UI.getHeader();
document.body.appendChild(header);

let game = new GameBrain();

let buttons = UI.getButtons(game);
document.body.appendChild(buttons);

function updateInfo(x, y, e) {
    if (game.board[x][y] === undefined) {
        game.makeAMove(x, y, updateInfo);
        e.target.innerHTML = game.board[x][y] || "&nbsp;";
        console.log("why does it get here");
    } else if (game.board[x][y] === game.movingPlayer) {
        e.target.innerHTML = "&nbsp;";
    } else {
        game.showMoveError();
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

let board = UI.getBoard(game, game.board, updateInfo);
document.body.appendChild(board);
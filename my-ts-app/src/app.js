import { GameBrain } from "./game";
import * as UI from "./ui";
let game = new GameBrain();
function initializeUI() {
    let header = UI.getHeader();
    document.body.appendChild(header);
    let timer = UI.getTimer(game);
    document.body.appendChild(timer);
    let buttons = UI.getButtons(game);
    document.body.appendChild(buttons);
    let board = UI.getBoard(game, game.board, updateInfo);
    document.body.appendChild(board);
}
export function updateBoard() {
    let oldBoard = document.getElementById("board");
    if (oldBoard) {
        oldBoard.remove();
    }
    let newBoard = UI.getBoard(game, game.board, updateInfo);
    document.body.appendChild(newBoard);
}
function updateInfo(x, y, e) {
    if (game.board[x][y] === undefined) {
        game.makeAMove(x, y);
        e.target.innerHTML = game.board[x][y] || "&nbsp;";
    }
    else if (game.board[x][y] === game.movingPlayer) {
        game.removePiece(x, y);
    }
    else {
        game.showMoveError();
    }
    handleAIMove();
    let winner = game.checkWin();
    if (winner && game.singlePlayer === false) {
        setTimeout(() => {
            alert(`Game over! ${winner} wins!`);
            console.log(winner);
        }, 100);
    }
    updateBoard();
}
export function handleAIMove() {
    if (game.singlePlayer === true && game.movingPlayer === "O" && !game.gameOver) {
        setTimeout(() => {
            game.makeAIMove();
            let winner = game.checkWin();
            if (winner) {
                setTimeout(() => {
                    alert(`Game over! ${winner} wins!`);
                    console.log(winner);
                }, 100);
            }
        }, 1000);
    }
}
initializeUI();
//# sourceMappingURL=app.js.map
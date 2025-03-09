import { GameBrain } from "./game";
import * as UI from "./ui";
let game = new GameBrain();
let header = UI.getHeader();
let timer = UI.getTimer(game);
let buttons = UI.getButtons(game);
let board = UI.getBoard(game, game.board, updateInfo);
let container = document.createElement("div");
container.id = "game-container";
container.appendChild(header);
container.appendChild(timer);
container.appendChild(buttons);
container.appendChild(board);
document.body.appendChild(container);
export function updateBoard() {
    let oldBoard = document.getElementById("board");
    if (oldBoard) {
        let newBoard = UI.getBoard(game, game.board, updateInfo);
        oldBoard.replaceWith(newBoard);
    }
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
            updateBoard();
        }, 1000);
    }
}
//# sourceMappingURL=app.js.map
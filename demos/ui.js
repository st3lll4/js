import * as app from "./app.js";

export function getHeader() {
    let h1 = document.createElement("h1");
    h1.innerHTML = "Tic Tac Two";
    h1.id = "title";
    h1.classList.add("row");
    return h1;
}

export function getBoard(game, gameBoard, updateInfo) {
    let board = document.createElement("div");
    board.classList.add("board");
    board.id = "board";

    let info = document.createElement("div");
    info.classList.add("row");
    info.classList.add("info");
    info.innerHTML = "moving: " + game.movingPlayer;
    info.innerHTML += " | X pieces left: " + game.xPieces;
    info.innerHTML += " | O pieces left: " + game.OPieces;
    board.appendChild(info);

    for (let i = 0; i < 5; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 5; j++) {
            let col = document.createElement("div");
            col.classList.add("col");
            if (game.isInGrid(i, j)) {
                col.classList.add("grid-sq")
            }
            col.addEventListener("click", (event) => { updateInfo(i, j, event); });

            col.innerHTML = gameBoard[i][j] || " ";
            row.appendChild(col); // Append column to row
        }
        board.appendChild(row); // Append row to board
    }
    return board;
}

export function getButtons(game) {
    let buttons = document.createElement("div");
    buttons.classList.add("row");

    let buttonLeft = document.createElement("div");
    buttonLeft.classList.add("small-btn");
    buttonLeft.classList.add("m-3")
    buttonLeft.innerHTML = "&#8592;";

    buttonLeft.addEventListener("click", () => {
        game.moveLeft();
        app.updateBoard();
    });

    buttons.appendChild(buttonLeft);

    let buttonRight = document.createElement("div");
    buttonRight.classList.add("small-btn");
    buttonRight.classList.add("m-3")
    buttonRight.innerHTML = "&#8594;";

    buttonRight.addEventListener("click", () => {
        game.moveRight();
        app.updateBoard();
    });

    buttons.appendChild(buttonRight);

    let buttonUp = document.createElement("div");
    buttonUp.classList.add("small-btn");
    buttonUp.classList.add("m-3")
    buttonUp.innerHTML = "&#8593;";

    buttonUp.addEventListener("click", () => {
        game.moveUp();
        app.updateBoard();
    });

    buttons.appendChild(buttonUp);

    let buttonDown = document.createElement("div");
    buttonDown.classList.add("small-btn");
    buttonDown.classList.add("m-3")
    buttonDown.innerHTML = "&#8595;";

    buttonDown.addEventListener("click", () => {
        game.moveDown();
        app.updateBoard();
    });
    buttons.appendChild(buttonDown);

    return buttons;
}


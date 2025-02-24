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

            col.innerHTML = gameBoard[i][j] || "  ";
            row.appendChild(col); // Append column to row
        }
        board.appendChild(row); // Append row to board
    }

    return board;
}

export function getErrorbox() {
    let h3 = document.createElement("h3");
    h3.classList.add("row");
    h3.id = "error";
    return h3;
}

export function getButtons(game) {
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("row");

    let buttonLeft = document.createElement("div");
    buttonLeft.classList.add("small-btn");
    buttonLeft.classList.add("m-3")
    buttonLeft.innerHTML = "&#8592;";

    buttonLeft.addEventListener("click", () => {
        game.moveLeft();
        app.updateBoard();
    });

    buttonContainer.appendChild(buttonLeft);

    let buttonRight = document.createElement("div");
    buttonRight.classList.add("small-btn");
    buttonRight.classList.add("m-3")
    buttonRight.innerHTML = "&#8594;";

    buttonRight.addEventListener("click", () => {
        game.moveRight();
        app.updateBoard();
    });

    buttonContainer.appendChild(buttonRight);

    let buttonUp = document.createElement("div");
    buttonUp.classList.add("small-btn");
    buttonUp.classList.add("m-3")
    buttonUp.innerHTML = "&#8593;";

    buttonUp.addEventListener("click", () => {
        game.moveUp();
        app.updateBoard();
    });

    buttonContainer.appendChild(buttonUp);

    let buttonDown = document.createElement("div");
    buttonDown.classList.add("small-btn");
    buttonDown.classList.add("m-3")
    buttonDown.innerHTML = "&#8595;";

    buttonDown.addEventListener("click", () => {
        game.moveDown();
        app.updateBoard();
    });

    buttonContainer.appendChild(buttonDown);

    

    return buttonContainer;
}

import * as app from "./app";
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
    info.classList.add("row", "info");
    info.innerHTML = `moving: ${game.movingPlayer} &nbsp;&nbsp;|&nbsp;&nbsp; X pieces: ${game.xPieces} &nbsp;&nbsp;|&nbsp;&nbsp; O pieces: ${game.OPieces}`;
    board.appendChild(info);
    for (let i = 0; i < 5; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 5; j++) {
            let col = document.createElement("div");
            col.classList.add("col");
            if (game.isInGrid(i, j)) {
                col.classList.add("grid-sq");
            }
            col.addEventListener("click", (event) => { updateInfo(i, j, event); });
            col.innerHTML = gameBoard[i][j] || " ";
            row.appendChild(col);
        }
        board.appendChild(row);
    }
    return board;
}
export function getButtons(game) {
    let buttons = document.createElement("div");
    buttons.classList.add("row");
    let buttonLeft = document.createElement("div");
    buttonLeft.classList.add("small-btn", "m-3");
    buttonLeft.innerHTML = "&#8592;";
    buttonLeft.addEventListener("click", () => {
        game.moveLeft();
        app.updateBoard();
        app.handleAIMove();
    });
    buttons.appendChild(buttonLeft);
    let buttonRight = document.createElement("div");
    buttonRight.classList.add("small-btn", "m-3");
    buttonRight.innerHTML = "&#8594;";
    buttonRight.addEventListener("click", () => {
        game.moveRight();
        app.updateBoard();
        app.handleAIMove();
    });
    buttons.appendChild(buttonRight);
    let buttonUp = document.createElement("div");
    buttonUp.classList.add("small-btn", "m-3");
    buttonUp.innerHTML = "&#8593;";
    buttonUp.addEventListener("click", () => {
        game.moveUp();
        app.updateBoard();
        app.handleAIMove();
    });
    buttons.appendChild(buttonUp);
    let buttonDown = document.createElement("div");
    buttonDown.classList.add("small-btn", "m-3");
    buttonDown.innerHTML = "&#8595;";
    buttonDown.addEventListener("click", () => {
        game.moveDown();
        app.updateBoard();
        app.handleAIMove();
    });
    buttons.appendChild(buttonDown);
    return buttons;
}
export function getTimer(game) {
    let wrapper = document.createElement("div");
    wrapper.classList.add("row");
    let modeSwitch = document.createElement("div");
    modeSwitch.classList.add("small-btn", "big-btn", "m-3");
    const updateModeButton = () => {
        modeSwitch.innerHTML = game.singlePlayer === false ? "multiplayer" : "single player";
        modeSwitch.style.backgroundColor = game.singlePlayer === false ? "#3498db" : "#2ecc71";
    };
    updateModeButton();
    modeSwitch.addEventListener("click", () => {
        game.toggleGameMode();
        updateModeButton();
        app.updateBoard();
    });
    wrapper.appendChild(modeSwitch);
    let countdown = 5;
    const timerElement = document.createElement("div");
    timerElement.classList.add("small-btn", "timer");
    wrapper.appendChild(timerElement);
    timerElement.textContent = countdown.toString();
    let timerInterval = 0;
    function startTimer() {
        if (timerInterval != 0) {
            clearInterval(timerInterval);
        }
        timerInterval = setInterval(() => {
            countdown--;
            timerElement.textContent = countdown.toString();
            if (game.moveMade) {
                countdown = 5;
                game.moveMade = false;
                timerElement.textContent = countdown.toString();
            }
            else if (countdown === 0) {
                alert("you didnt move, sleepy! switching players");
                game.switchPlayer();
                app.updateBoard();
                countdown = 5;
                timerElement.textContent = countdown.toString();
                app.handleAIMove();
            }
            if (game.gameOver) {
                clearInterval(timerInterval);
                timerInterval = 0;
            }
        }, 1000);
    }
    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = 0;
        }
        countdown = 5;
        timerElement.textContent = countdown.toString();
    }
    let startButton = document.createElement("div");
    startButton.classList.add("small-btn", "big-btn", "m-3");
    startButton.innerHTML = "start timer";
    let resetButton = document.createElement("div");
    resetButton.classList.add("small-btn", "big-btn", "m-3");
    resetButton.style.backgroundColor = "#e74c3c";
    resetButton.innerHTML = "reset";
    startButton.addEventListener("click", () => {
        if (!game.gameOn) {
            game.gameOn = true;
            game.gameOver = false;
            startTimer();
            app.updateBoard();
        }
    });
    resetButton.addEventListener("click", () => {
        game.resetGame();
        stopTimer();
        app.updateBoard();
    });
    wrapper.appendChild(startButton);
    wrapper.appendChild(resetButton);
    return wrapper;
}
//# sourceMappingURL=ui.js.map
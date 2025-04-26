"use client";

import { useEffect, useState } from "react";
import kaverBingo from "../kaverBingo";

const bingoBoard = () => {
  const createGrid = (rows: number, cols: number) => {
    const grid: boolean[][] = [];
    for (let i = 0; i < rows; i++) {
      const row: boolean[] = []
      for (let j = 0; j < cols; j++) {
        row.push(false)
      }
      grid.push(row);
    }
    return grid;
  }

  const [bingoBoard, setBingoBoard] = useState<string[][]>([]);

  const [clicked, setClicked] = useState<boolean[][]>(createGrid(5,5))

  useEffect(() => {

    try {
      const storedBoard = localStorage.getItem('bingoState');
      const storedClicked = localStorage.getItem('clickedSquares');

      if (storedBoard) {
        setBingoBoard(JSON.parse(storedBoard))
      } 
      else {
        getNewBoard();
      }
      if (storedClicked) {
        setClicked(JSON.parse(storedClicked));
      } 
    } catch (e) {
      console.error("error loading from localStorage:", e);
      getNewBoard();
    }
  }, []);

  useEffect(() => {
    if (bingoBoard.length > 0) {
      localStorage.setItem('bingoState', JSON.stringify(bingoBoard));
    }
  }, [bingoBoard]);

  useEffect(() => {
    localStorage.setItem('clickedSquares', JSON.stringify(clicked));
  }, [clicked]);

  const getNewBoard = () => {
    const bingo = new kaverBingo();
    const board = bingo.getBingoBoard();
    setBingoBoard(board);
    setClicked(createGrid(5, 5)); 
  };

  return (<>
    <div className="board">
      {bingoBoard.length === 0 ? (
        <p>Mõtleb……</p>
      ) : (
        bingoBoard.map((row, i) => (
          <div key={i} className="bingo-row">
            {row.map((cell, j) => (
              <div key={j} className={`bingo-cell ${clicked[i][j] ? "clicked" : ""}`}
                onClick={() => {
                  const newClicked = [...clicked];
                  newClicked[i][j] = !newClicked[i][j];
                  setClicked(newClicked);
                }}
              >
                {i === 2 && j === 2 ? <p id="free">FREE</p> : cell}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
    <img onClick={ getNewBoard } className="new-board" src="/images/btn.png" alt="" />

    </>
  );
};

export default bingoBoard;
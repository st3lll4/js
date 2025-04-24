"use client";

import { useEffect, useState } from "react";
import kaverBingo from "../kaverBingo";

const bingoBoard = () => { // setstatele sama objekti tagasi andes asi ei tööta, state peaks olema ahel. vt käver
    const [bingoBoard, setBingoBoard] = useState<string[][]>([]);

    useEffect(() => {
      const bingo = new kaverBingo();
      const board = bingo.getBingoBoard();
      setBingoBoard(board);
    }, []); 

    const [clicked]


    return (
      <div className="board">
        {bingoBoard.length === 0 ? (
          <p>Mõtleb……</p>
        ) : (
          bingoBoard.map((row, i) => (
            <div key={i} className="bingo-row">
              {row.map((cell, j) => (
                <div @onclick key={j} className="bingo-cell">
                  {i === 2 && j === 2 ? "FREE" : cell}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    );
  };

export default bingoBoard;
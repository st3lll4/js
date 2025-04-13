import { useEffect, useState } from "react";
import kaverBingo from "../bingoStore";

const bingoBoard = () => { // setstatele sama objekti tagasi andes asi ei tööta, state peaks olema ahel. vt käver
    const [bingo, setCount] = useState(new kaverBingo())
    return (
        <>
        <div class="board">
    <div v-for="(row, rowIndex) in gameStore.board" :key="rowIndex" class="row">
      <div v-for="(col, columnIndex) in gameStore.board" 
        :key="`${rowIndex},${columnIndex}`" 
        :class="['col', {
        'grid-sq': gameStore.isInGrid(rowIndex, columnIndex)
        }]" 
        @click="handleMove(rowIndex, columnIndex)">
          {{ board[rowIndex][columnIndex] || '' }}
      </div>
    </div>
  </div></>
    )
}

export default bingoBoard;
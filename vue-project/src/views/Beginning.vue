<script setup lang="ts">
import { useUserStore } from "../stores/userstore";
import { useGameStore } from "../stores/gameStore";
import router from "../router";

const userStore = useUserStore();
const gameStore = useGameStore();
</script>

<template>
  <div class="card">
    <h1 v-if="userStore.userName != ''">Welcome, {{ userStore.userName }}</h1>
    <h1 v-else>Welcome!</h1>
    <hr />
    <div class="my-2">
      This is a Tic Tac Two game built by
      <a href="https://github.com/st3lll4">Stella Tukia</a>. As much as I would
      like to take credit for creating this <strong>amazing</strong> game, the
      real geniuses behind it are
      <a href="https://gamescrafters.berkeley.edu/games.php?game=tictactwo"
        >Stella Wan, Nala Chen and Cameron Cheung</a
      >. This is a shoutout to them, they probably even not know that a
      professor from Tallinn University of Technology discovered their game and
      liked it so much that he made his students rewrite it in 7 programming
      languages. This one is in Vue and Typescript.
    </div>
    <hr />
    <h4>So with futher ado, here are the rules:</h4>
    <div class="content">
      <div class="card-rules">
        <div class="my-2">
          Tic-Tac-Two is played on a 5x5 board with a movable 3x3 grid. At the
          start of the game, the 3x3 is centered at the center cell of the
          board.
        </div>
        <div class="my-2">
          The first player has <strong>4</strong> "X" pieces and the second
          player has <strong>4</strong> "O" pieces to place.
        </div>
        <div class="my-2">
          Each player takes turns placing one of their pieces on any empty cell
          within the 3x3 grid.
        </div>
        <div class="my-2">
          Once each player has placed at least <strong>2</strong> of their
          pieces, they may do one of three things on their turn:
        </div>
        <li>
          either place one of their remaining pieces on an empty cell within the
          tic-tac-toe grid,
        </li>
        <li>
          move the tic-tac-toe grid such that it is centered at a cell one space
          horizontally, vertically, or diagonally away from the cell it was
          originally centered at
        </li>
        <li>
          move one of their pieces that is already on the board (regardless of
          whether it is within the tic-tac-toe grid) to any empty cell within
          the grid.
        </li>
        <div class="my-2">
          The first player to create a horizontal, vertical, or diagonal line of
          their own pieces in the 3x3 grid wins! If in a single move the grid
          has been moved such that it contains both a three-in-a-row of X pieces
          and a three-in-a-row of O pieces, then the game is a tie.
        </div>
        <div>
          <a href="https://gamescrafters.berkeley.edu/games.php?game=tictactwo"
            >Source</a
          >
        </div>
      </div>
      <div v-if="userStore.userName != ''" class="card-buttons">
        <!---vaja lugeda mangu alguses parameeter ja siis selle jargi panna gamemode-->
        <RouterLink
          class="btn"
          :to="{ name: 'Game', params: { gamemode: 'singleplayer' } }"
        >
          Play against a bot (don't worry, he's a beginner)
        </RouterLink>

        <RouterLink
          class="btn"
          :to="{ name: 'Game', params: { gamemode: 'multiplayer' } }"
        >
          Play against a friend, if you have one
        </RouterLink>
      </div>
      <div class="card-buttons" v-else> 
        <div class="btn disabled">Log in first to play!</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  font-family: "Gill Sans", "Gill Sans my", Calibri, "Trebuchet MS", sans-serif;
  font-size: smaller;
  background-color: #e6ecfe;
  margin: 1rem;
}

a {
  text-decoration: none;
  color: rgb(61, 121, 233);
  transition: 0.3s ease;
}

a:hover {
  color: rgb(140, 191, 241);
}

.card-rules {
  width: 70%;
}

.card-buttons {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.content {
  display: flex;
}

.btn {
  background-color: rgb(77, 113, 232);
  color: white;
  border-radius: 0.3rem;
  padding: 1.5rem;
  transition: 0.2s ease;
  width: 90%;
}

.btn:hover {
  background-color: #e6ecfd;
  border: 1px solid rgb(77, 113, 232);
  color: rgb(77, 113, 232);
}
</style>

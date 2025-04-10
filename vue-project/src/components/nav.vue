<script setup lang="ts">
import { useGameStore } from '../stores/gameStore';
import { useUserStore } from '../stores/userstore';
import { RouterLink, useRouter } from 'vue-router';

const userStore = useUserStore();
const gameStore = useGameStore();

const router = useRouter();

</script>


<template>
  <nav>
    <div class="nav-container">
      <ul>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/" @click="{ gameStore.resetGame(); }" >Houm</RouterLink> <!--TODO: vb see mangu end screenile-->
        </li>
        <li v-if="!userStore.userName" class="nav-item">
          <RouterLink class="nav-link" to="/Login">Log in</RouterLink>
        </li>
        <li v-if="userStore.userName" class="nav-item">
          <RouterLink class="nav-link" :to="{ name: 'Game', params: { gamemode: 'singleplayer'}}">Play game</RouterLink>
        </li>
        <li v-if="userStore.userName" class="nav-item">
          <a @click="() => { userStore.userName = ''; router.push('/Login'); gameStore.resetGame(); }" class="nav-link">Log out</a>
        </li>
      </ul>
      <div class="nav-greeting" v-if="userStore.userName">
        Logged in as: {{ userStore.userName }}
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(58, 116, 217) 100%);
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1400px;
  max-width: 100%;
  padding: 0 1rem;
}

.nav-greeting {
  color: #ffffff;
  margin-left: auto;
}

ul {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center;
  gap: clamp(1rem, 3vw, 5rem);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #214788;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

.name {
  margin-right: 5rem;
}

.nav-link:hover {
  color: #5b88d7;
}
</style>
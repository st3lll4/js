<script setup lang="ts">
import { useUserStore } from '../stores/userstore';
import { RouterLink } from 'vue-router';

const store = useUserStore();

</script>


<template>
  <nav>
      <ul>
        <li class="nav-item">
          <a class="nav-link" href="#bening">Beninging</a> <!--TODO: vb see mangu end screenile-->
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#game">Play game</a>
        </li>
        <li v-if="store.userName" class="nav-item">
          <div class="nav-link" to="/">Welcome, {{ store.userName }}</div>
        </li>u
        <li v-if="store.userName" class="nav-item">
          <a @click="() => { store.userName = '' }" class="nav-link" to="/">Log out</a>
        </li>
      </ul>
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
  font-weight: bold;
}


ul {
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 10rem;
  list-style: none;
  margin: 0;
  padding: 0;
}


.nav-link {
  color: #214788;
  text-decoration: none;
  transition: color 0.1.5s ease;
}

.nav-link:hover {
  color: #316fd9;
}
</style>
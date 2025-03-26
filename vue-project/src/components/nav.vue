<script setup lang="ts">
import { useUserStore } from '../stores/userstore';
import { RouterLink, useRouter } from 'vue-router';

const store = useUserStore();
const router = useRouter();

</script>


<template>
  <nav>
      <ul>
        <li v-if="store.userName" class="nav-item name">
          <div class="nav-link" to="/">Logged in as: {{ store.userName }}</div> <!--todo: mis sellega teha, kas mingi link v div-->
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Beninging</RouterLink> <!--TODO: vb see mangu end screenile-->
        </li>
        <li v-if="!store.userName" class="nav-item">
          <RouterLink class="nav-link" to="/Login">Log in</RouterLink>
        </li>
        <li v-if="store.userName" class="nav-item">
          <RouterLink class="nav-link" to="/Game">Play game</RouterLink>
        </li>
        <li v-if="store.userName" class="nav-item">
          <a @click="() => { store.userName = '' ; router.push('/Game'); }" class="nav-link">Log out</a> <!--todo: mis sellega teha, kas mingi link v mis-->
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
  grid-template-columns: 15rem 10rem 10rem 10rem;
  list-style: none;
  margin: 0;
  padding: 0;
}


.nav-link {
  color: #214788;
  text-decoration: none;
  transition: color 0.1.5s ease;
  cursor: pointer;
}

.name { 
  margin-right: 5rem;
}

.nav-link:hover {
  color: #316fd9;
}
</style>
<script setup lang="ts">
import { useUserDataStore } from '../stores/userstore';
import '../assets/style.css'

</script>

<template>
  <nav>
    <div class="container">
        <ul>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
        </ul>
      </div>
  </nav>
</template>

<style scoped>

nav {
  background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(58, 116, 217) 100%);
  font-size: 1.15rem;
  height: 3rem;
  display: flex;
  align-items: center;
}

ul {
  list-style: none;
}

.nav-item {
  color: #214788; 
  padding-left: 1rem;
  padding-right: 1rem;
  text-decoration: none;
}
.nav-item:hover {
  color: #3A74D9;
}

</style>
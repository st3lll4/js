<script setup lang="ts">
//import { useUserStore } from '../stores/userStore'
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        
      </ul>
    </div>
  </nav>
</template>

<style scoped>

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(58, 116, 217) 100%);
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 15px;
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
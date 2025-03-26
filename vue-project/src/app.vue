<script setup>
import { ref, computed, reactive } from 'vue';
import Nav from './components/Nav.vue'
import './assets/style.css'
import Login from './components/Login.vue';

</script>

<template>
  <Nav />
  <main id="app">
    <RouterView />
  </main>
</template>

<style scoped>

main {
  margin-top: 1rem;
}

</style>

<script setup>
import { ref, computed, reactive } from 'vue';
import Nav from './components/nav.vue'
import './assets/style.css'
import Login from './components/Login.vue';

</script>

<template>
  <Nav />
  <main id="app">
    <Login/>
  </main>
</template>

<style scoped>

main {
  margin-top: 1rem;
}

</style>

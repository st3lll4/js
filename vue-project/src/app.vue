<script setup>
import { ref, computed, reactive } from 'vue';
import Nav from './components/Nav.vue'
import './assets/style.css'

</script>

<template>
  <Nav />
  <main id="app">
    <div class="wrapper">
    <RouterView />
    </div>
  </main>
</template>

<style scoped>

main {
  margin-top: 1rem;
  /* display: flex;
  justify-content: center; */
}
/* 
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
} */

</style>

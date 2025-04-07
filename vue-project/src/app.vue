<script setup>
import Nav from './components/Nav.vue'
import './assets/style.css'

</script>

<template>
  <Nav />
  <main id="app">
    <RouterView />
  </main>
</template>

<style scoped>

main {
  margin: 1rem 0 0 0;
  padding: 0;
}

</style>

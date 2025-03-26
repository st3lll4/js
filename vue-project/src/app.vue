<script setup>
import { ref, computed, reactive } from 'vue';
import Nav from './components/nav.vue'
import './assets/style.css'
import board from './components/board.vue';

</script>

<template>
  <Nav/>
  <main class="container">
    <board />
  </main>
</template>

<style scoped></style>

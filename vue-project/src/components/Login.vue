<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/userstore';

const store = useUserStore();

const userName = ref("");
const password = ref("");

const doLogin = () => {
    store.userName = userName.value;
    store.password = password.value;
} 
</script>

<template>
  <form @submit.prevent="doLogin">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Username</label>
      <input v-model="userName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-dark">Submit</button>
  </form>
  User: {{ store.userName }} Pass: {{ store.password }}
</template>

<style scoped>



</style>
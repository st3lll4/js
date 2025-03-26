<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/userstore';

const store = useUserStore();

const email = ref("saurus@dino.ee");
const password = ref("lammas");

const doLogin = () => {
  if (email.value === "saurus@dino.ee" && password.value === "lammas") {
    store.email = email.value;
    store.password = password.value;
  }
}

</script>

<template>
  <form @submit.prevent="doLogin">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  User: {{ email }} Pass: {{ password }}
</template>

<style scoped>



</style>
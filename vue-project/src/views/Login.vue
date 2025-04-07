<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/userstore';
import router from '../router';

const store = useUserStore();

const userName = ref("");
const password = ref("");

const doLogin = () => {
  store.userName = userName.value;
  store.password = password.value;
  router.push({ name: 'Beginning' })
}

const status = ref('')

</script>

<template>
  <form @submit.prevent="doLogin">
    <div class="container">
      <div class="mb-3 sign-in">
        Sign in
      </div>
      <div class="details">
        <label for="exampleInputEmail1" class="details text">username</label>
        <input v-model="userName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <label for="exampleInputPassword1" class="details text">password</label>
        <input v-model="password" type="password" class="form-control mb-3" id="exampleInputPassword1">

        <div  class="check-info">
          <input v-model="status" @change="(console.log(status))" required type="checkbox" class="checkbox">
          <span class="check-text">
            i agree that my data is provided to pink dinosaurs for approval
          </span>
          </div>
        <button type="submit" class="btn mt-2">Log in</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.container {
  max-width: 500px;
  padding: 1rem 4rem 3rem 4rem;
}

.sign-in {
  text-align: center;
  border: 1px solid rgb(173, 191, 240);
  width: 100px;
  border-radius: 0.6rem;
  padding: 0 1.5rem;
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: auto;
  color: rgb(84, 121, 242);
}

.details {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(230, 236, 255);
  border-radius: 0.5rem;
  padding: 1rem 3rem;
}

.text {
  color: rgb(102, 137, 233);
  margin-bottom: 0;
  padding: 1rem 0 0 0;
  margin-right: auto;
  font-size: 1rem;
}

input,
.btn {
  border: 1px solid rgb(127, 155, 247);
}

.btn {
  background-color: rgb(77, 113, 232);
  color: white;
  border-radius: 0.3rem;
  padding: 0 1.5rem;
  font-size: 1.2rem;
  transition: 0.5s ease;
}

.btn:hover {
  background-color: rgb(150, 170, 234);
}

.check-text {
  font-size: 0.6rem;
  margin-left: 0.5rem;
  color: rgb(127, 155, 247);
}

.check-info {
  padding: 0;
  margin-right: auto;
  display: flex;
  align-items: start;
}
</style>
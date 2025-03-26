<script setup lang="ts">
import { useUserDataStore } from '../stores/userDataStore';
import { RouterLink, useRouter } from 'vue-router';
const router = useRouter()

const store = useUserDataStore();

</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Fixed navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li v-if="store.email.length > 0" class="nav-item">
            <RouterLink class="nav-link" to="/page1">Page1</RouterLink>
          </li>
          <li v-if="store.email.length > 0" class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'Page2', params: { username: store.email } }">Page2</RouterLink>
          </li>
          <li v-if="store.email.length > 0" class="nav-item">
            <a @click="() => { store.email = ''; router.push('/'); }" class="nav-link">Logout {{ store.email }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

nav {
  background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(58, 116, 217) 100%);
  font-size: 1.15rem;
}

.navigation-link {
  color: #214788; /* todo: not sure */
  padding-left: 1rem;
  padding-right: 1rem;
  text-decoration: none;
}
.navigation-link:hover {
  color: #3A74D9;
}

.icon {
  background-color: white;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 2vh 0 2vh;
  transition: 0.3s;
}
.icon:hover {
  background-color: #3A74D9;
  color: white;
  border: 1px white;
}

nav .container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}


</style>
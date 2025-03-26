import Login from "@/components/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import Game from "@/components/Game.vue";
import { compile } from "vue";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/game",
        name: "Play",
        component: Game
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
  
  export default router
  
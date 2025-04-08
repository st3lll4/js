import Login from "../views/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import Game from "../views/Game.vue";
import Beginning from "../views/Beginning.vue";

const routes = [
    {
        path: "/",
        name: "Beginning",
        component: Beginning,
        props: true,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
        props: true,
    },
    {
        path: "/game",
        name: "Game",
        component: Game,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
  

  
export default router
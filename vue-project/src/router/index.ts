import Login from "../components/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import Game from "../components/Game.vue";
import Beginning from "../components/Beginning.vue";

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
    history: createWebHistory(),
    routes,
})
  
export default router
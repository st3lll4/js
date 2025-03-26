import Login from "@/components/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import Game from "@/components/Game.vue";
import { compile } from "vue";

const routes = [
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/game",
        name: "Play",
        component: Game,
    }
]

const router = createRouter({
    history: createWebHistory('/'), // vb tekitab probleeme aga ei saa importida seda teist
    routes,
})
  
export default router
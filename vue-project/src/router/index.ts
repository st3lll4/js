import Login from "@/components/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import Game from "@/components/Game.vue";
import Beginning from "@/components/Beginning.vue";
import { compile } from "vue";

const routes = [
    {
        path: "/",
        name: "Beginning",
        component: Beginning,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/game/:userName",
        name: "Game",
        component: Game,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory('/'), // vb tekitab probleeme aga ei saa importida seda teist
    routes,
})
  
export default router
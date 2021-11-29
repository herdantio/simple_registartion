import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../atomic/pages/Start.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
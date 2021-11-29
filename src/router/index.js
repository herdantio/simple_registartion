import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Start',
        component: () => import('../atomic/pages/Start.vue')
    },
    {
        path: '/register',
        component: () => import('../atomic/pages/UserRegistration.vue'),
        children: [
            {
                path: '/',
                component: () => import('../atomic/pages/Name.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
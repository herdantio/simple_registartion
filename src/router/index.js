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
                path: 'name',
                component: () => import('../atomic/pages/Name.vue')
            },
            {
                path: 'nik',
                component: () => import('../atomic/pages/NIK.vue')
            },
            {
                path: 'address',
                component: () => import('../atomic/pages/Address.vue')
            },
            {
                path: 'birthdate',
                component: () => import('../atomic/pages/BirthDate.vue')
            },
            {
                path: 'photo',
                component: () => import('../atomic/pages/Photo.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
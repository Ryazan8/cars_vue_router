import {createRouter, createWebHistory} from 'vue-router'

import Main from "../pages/Main.vue";
import Index from "../pages/car/Index.vue";
import Show from "../pages/car/Show.vue";
import Create from "../pages/car/Create.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/index',
            component: Index
        },
        {
            path: '/show',
            component: Show
        },
        {
            path: '/create',
            component: Create
        }

    ]
})

export default  router
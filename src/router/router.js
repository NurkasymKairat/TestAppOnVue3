import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.Base_URL)
});


export default router;
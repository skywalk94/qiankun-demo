import {
    createRouter,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/micro-vue",
        component: () => import("../views/micro-vue.vue")
    }, {
        path: "/micro-react",
        component: () => import("../views/micro-react.vue")
    }]
})

export default router

import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pot-player/m3u8-change',
        name: 'pot-player-m3u8-change',
        component: () => import("@/views/potplayer/M3u8change")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

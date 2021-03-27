import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pot-player-m3u8-change',
        name: 'pot-player-m3u8-change',
        component: () => import("@/views/potplayer/M3u8change")
    },
    {
        path: '/pot-player-movie-search',
        name: 'pot-player-movie-search',
        component: () => import("@/views/potplayer/MovieSearch")
    },
    {
        path: '/pot-player-movie-play',
        name: 'pot-player-movie-play',
        component: () => import("@/views/potplayer/MoviePlay")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

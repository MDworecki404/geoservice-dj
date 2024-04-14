import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import MapComponent from '../components/MapComponent.vue'

const routes = [
    {
        path: '/',
        name: 'Strona główna',
        component: LandingPage
    },
    {
        path: '/map',
        name: 'Mapa',
        component: MapComponent
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router
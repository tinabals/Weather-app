import {createRouter , createWebHistory} from 'vue-router'


import WeatherApp from './pages/WeatherApp'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', component : WeatherApp}
    ]
})


export default router
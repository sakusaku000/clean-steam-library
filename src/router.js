import {createRouter, createWebHistory} from 'vue-router';

// view components
import Library from './views/Library.vue';

const routes = [
    {
        path:"/",
        name:"Library",
        component:Library
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
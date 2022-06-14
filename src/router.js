import {createRouter, createWebHistory} from 'vue-router';

// view components
import Library from './views/Library.vue';
import Login from './views/Login.vue';

const routes = [
    {
        path:"/",
        name:"Library",
        component:Library
    },
    {
        path:"/login",
        name:"Login",
        component:Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// check if id is in storage before allowing navigation
router.beforeEach((to, from) => {
    if (!localStorage.getItem("id") && to.name !== "Login") {
        return {name:"Login"}
    }
});


export default router
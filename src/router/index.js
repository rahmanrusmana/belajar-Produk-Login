import { createWebHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Conten from "../views/conten.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component:Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/conten",
        name: "Conten",
        component:Conten,
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else{
        next();
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else{
        next();
    }
})

export default router;
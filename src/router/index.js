import { createWebHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Conten from "../views/conten.vue"
import SingleProduk from "../views/SingleProduk.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"
import Contact from "../views/Contact.vue"
import Navbar from "../components/Navbar.vue"

const routes = [
    {
        path: "/navbar",
        name: "Navbar",
        component:Navbar,
    },
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
    },
    {
        path: "/detail",
        name: "SingleProduk",
        component: SingleProduk
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
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
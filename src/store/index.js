import { createStore } from "vuex";
import transaksi from "./modules/transaksi";
import users from "./modules/user.js";
import auth from "./modules/auth";

const store = createStore({
    state: {
        isLoading:false
    },
    modules:{
        transaksi,
        users,
        auth
    }
})
export default store;
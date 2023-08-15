const notification = {
    namespaced: true,
    state: {
        notification: null,
    },
    mutations: {
        SET_NOTIFICATIONS(state, {massage, type}) {
            state.notification = { massage,type};
        },
    },
    actions: {
        setNotifications({ commit }, {massage,type}){
            commit("SET_NOTIFICATIONS", {massage, type});
            setTimeout(() => {
                commit("SET_NOTIFICATIONS", null)
            }, 3000);
        }
    }
}

export default notification;
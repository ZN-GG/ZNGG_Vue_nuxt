export const actions = {
    nuxtServerInit({ commit }, { app }) {
        let token = app.$cookies.get('token')
        commit('user/setLogin', token === true ? true : false);
    },
}
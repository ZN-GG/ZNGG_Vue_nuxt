export const state = () => ({
    loginShow: false,
    isLogin: false,
})

export const mutations = {
    login(state) {
        state.loginShow = true
    },
    closeLogin(state) {
        state.loginShow = false
    },
    setLogin(state, value) {
        state.isLogin = value
    }
}


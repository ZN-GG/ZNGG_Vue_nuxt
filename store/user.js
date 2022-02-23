export const state = () => ({
    isLogin: false
})

export const mutations = {
    login(state) {
        state.isLogin = true
    },
    closeLogin(state) {
        state.isLogin = false
    }
} 
export const state = () => ({
    isLogin: true
})

export const mutations = {
    login(state) {
        state.isLogin = true
    },
    closeLogin(state) {
        state.isLogin = false
    }
} 
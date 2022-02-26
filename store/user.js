export const state = () => ({
    loginShow: false
})

export const mutations = {
    login(state) {
        state.loginShow = true
    },
    closeLogin(state) {
        state.loginShow = false
    }
} 
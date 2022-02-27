export default function ({store, redirect}) {
    let token;
    token = store.state.localStorage.token.length > 0 ? true : false

    if (!token) {
        store.commit("user/login")
    }
}
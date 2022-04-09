export default function ({ store, app, redirect, route }) {
    let token = app.$cookies.get('token')
    if (!token) {
        redirect("/login")
    }
}
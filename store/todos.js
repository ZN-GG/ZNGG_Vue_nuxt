export const state = () => ({
  list: [],
  isShow: false
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
    state.isShow = true;
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}
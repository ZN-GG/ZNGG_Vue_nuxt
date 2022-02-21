export default ({ $axios }, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const api = $axios.create({})

  api.setToken("1eb6ee648a4a993cd0c3824e863f9ed5")

  api.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  
  inject('api', api)

  // You can reuse the repositoryWithAxios object:
  // inject("userRepository", repositoryWithAxios('/users'));
}

export default ({ $axios }, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const api = $axios.create({})

  api.setToken("785ca47b48c50f802d99d08ba912e645")

  api.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  
  inject('api', api)

  // You can reuse the repositoryWithAxios object:
  // inject("userRepository", repositoryWithAxios('/users'));
}

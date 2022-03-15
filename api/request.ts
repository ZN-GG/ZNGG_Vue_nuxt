import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios: NuxtAxiosInstance

export function initializeAxios (axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
  // $axios.setBaseURL("http://127.0.0.1:8888/")
  $axios.setBaseURL("http://api.zn.gg/")
  
}


export { $axios }



//https://www.geekschool.org/2020/07/29/12339.html
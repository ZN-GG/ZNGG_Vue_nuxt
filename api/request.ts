import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios: NuxtAxiosInstance

export function initializeAxios (axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}


export { $axios }



//https://www.geekschool.org/2020/07/29/12339.html
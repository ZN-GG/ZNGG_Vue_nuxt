import { Plugin } from '@nuxt/types'
import { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import { $axios, initializeAxios } from '~/api/request'


const axios: Plugin = ({ error, app: { $axios, store } }) => {
  initializeAxios($axios)

  $axios.onRequest((config: AxiosRequestConfig) => {
    $axios.setToken((store as any).state.localStorage.token)
    // ...
    return config
  })

  $axios.onError((e: AxiosError<any>) => {
    // ...
  })

  // response拦截器，数据返回后，你可以先在这里进行一个简单的判断
  $axios.interceptors.response.use((response: AxiosResponse<any>) => {
    const res = response
    if (res.status === 200) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
    (e: any) => {
      const { status, data } = e.response
      error({ statusCode: status, message: data })
      return Promise.reject(e)
    })

}

export default axios

// export default accessor


// import axios from '@nuxtjs/axios';
// // 导出方法，供其他调用使用
// export default {
//   //get请求
//   requestGet(url, params = {}) {
//     return new Promise((resolve, reject) => {
//       axios.get(url, params).then(res => {
//         resolve(res.data)
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

//   // post请求
//   requestPost(url, params = {}) {
//     return new Promise((resolve, reject) => {
//       axios.post(url, params).then(res => {
//         resolve(res.data)
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },
//   // delete请求
//   requestDelete(url, params = {}) {
//     return new Promise((resolve, reject) => {
//       axios.delete(url, params).then(res => {
//         resolve(res.data)
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },
//   // put请求
//   requestPut(url, params = {}) {
//     return new Promise((resolve, reject) => {
//       axios.put(url, params).then(res => {
//         resolve(res.data)
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   }
// }

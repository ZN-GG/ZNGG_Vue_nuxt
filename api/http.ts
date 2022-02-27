import { $axios } from './request';

type ApiResponse = {
    success:boolean
    code:number,
    message: string,
    data: any
}

export const http = {
    //get请求
    get(url: string, params = {}) {
        return new Promise<ApiResponse>((resolve, reject) => {
            $axios.get(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // post请求
    post(url: string, params = {}) {
        return new Promise<ApiResponse>((resolve, reject) => {
            $axios.post(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // delete请求
    delete(url: string, params = {}) {
        return new Promise((resolve, reject) => {
            $axios.delete(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // put请求
    put(url: string, params = {}) {
        return new Promise((resolve, reject) => {
            $axios.put(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    }
}

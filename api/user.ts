import { http } from './http';


export const user = {
    login(params: any, captcha: string, captcha_key: string): any {
        return http.post("/user/" + captcha + '/' + captcha_key, params)
    }
}
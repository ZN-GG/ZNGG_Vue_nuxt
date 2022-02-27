import { http } from './http';

type ApiResponse = {
    success: boolean
    code: number,
    message: string,
    data: any
}

export const user = {
    login(params: any, captcha: string, captcha_key: string): Promise<ApiResponse> {
        return http.post("/user/" + captcha + '/' + captcha_key, params)
    },

    register(params: any, email_code: string, captcha_code: string, captcha_key): Promise<ApiResponse> {
        return http.post("/user?email_code=" + email_code + "&captcha_code=" + captcha_code + "&captcha_uuid=" + captcha_key, params)
    },
    sendEmailCaptcha(email: string): Promise<ApiResponse> {
        return http.get("/user/email_verify_code?type=register&email=" + email)
    }
}
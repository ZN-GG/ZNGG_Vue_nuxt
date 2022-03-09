import { http } from './http';

type ApiResponse = {
    success: boolean
    code: number,
    message: string,
    data: any
}

export const article = {

    getDetail(id: string): Promise<ApiResponse> {
        return http.get("/portal/article/" + id)
    },

    getList(page: number, size: number, params: any): Promise<ApiResponse> {
        return http.get("/portal/article/" + page + "/" + size, params)
    }

}
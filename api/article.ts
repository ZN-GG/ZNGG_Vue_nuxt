import { http } from './http';

type ApiResponse = {
    success: boolean
    code: number,
    message: string,
    data: any
}

export const article = {

    getDetail(id: string): Promise<ApiResponse> {
        return http.get("/article/detail/" + id)
    }

}
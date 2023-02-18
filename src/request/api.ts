import basicService from "./index";

interface IFetchLogin {
    username: string,
    password: string
}

//注册
export const fetchRegister = (params: IFetchLogin): Promise<any> => {
    return basicService.post('register', params);
}
//登录
export const fetchLogin = (params: IFetchLogin): Promise<any> => {
    return basicService.post('login', params);
}
export const fetchMenu = (): Promise<any> => {
    return basicService.get('/menu')
}

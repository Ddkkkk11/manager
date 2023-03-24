import { TOKEN_KEY } from "../constants";


//鉴权认证成功处理程序
export function authSuccessHandler(token: string) {
    window.localStorage.setItem(TOKEN_KEY, token);
}

//获取token
export function getToken() {
    return window.localStorage.getItem(TOKEN_KEY);
}
//移除token
export function removeToken() {
    return window.localStorage.removeItem(TOKEN_KEY);
}

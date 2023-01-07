import basicService from "./index";
interface IFetchLogin {
  username: string,
  password: string
}
//注册
export function fetchRegister (params: IFetchLogin): Promise<any> {
  return basicService.post('register', params);

}
//登录
export function fetchLogin (params: IFetchLogin): Promise<any> {
  return basicService.post('login', params);
}
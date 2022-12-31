import basicService from "./index";
interface IFetchLogin {
  username: string,
  password: string
}
//登录
export default function fetchLogin (params: IFetchLogin): Promise<any> {
  return basicService.post('user', params);
}
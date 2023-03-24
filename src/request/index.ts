import axios from "axios";
import { getToken } from "../utils";
import { TOKEN_KEY } from "../constants";

//创建axios实例
const basicService = axios.create({
    //基本路径的抽取
    // baseURL: 'http://localhost:3000',
    baseURL: `api`,
    timeout: 20000
});

//请求拦截器
basicService.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        // @ts-ignore
        config.headers[TOKEN_KEY] = `Bearer ${token}`;
    }
    return config;
}, err => {
    return Promise.reject(err.response.data);
});

//响应拦截器
basicService.interceptors.response.use(res => {
    return res.data;
}, err => {
    return Promise.reject(err.response.data);
});

export default basicService;
/*
如果不添加响应拦截器
res: {
  data: {  //下面是后端返回的东西
    data: {},
    err: {},
    code: 200
  }
}
假如我console.log(res.data)取到的就是
  {  //下面是后端返回的东西
    data: {},
    err: {},
    code: 200
  }
添加后
res.data => res: {
data: { obj: {} }
err: ''
code: 200
}
输出后 res.data = { obj: {} }
*/

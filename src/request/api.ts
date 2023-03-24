import basicService from "./index";

interface IFetchLogin {
    username: string,
    password: string
}

interface IFetchRegister {
    username: string
    password: string
}

//注册
export const fetchRegister = (params: IFetchRegister): Promise<any> => {
    return basicService.post('register', params);
}
//登录
export const fetchLogin = (params: IFetchLogin): Promise<any> => {
    return basicService.post('login', params);
}
export const fetchMenu = (): Promise<any> => {
    return basicService.get('/menu')
}
//获取学生数据
interface IFetchStudent {
    student_name: string
}
export const fetchStudent = (params: IFetchStudent): Promise<any> => {
    return basicService.get(`/student?student_name=${params.student_name}`);
}
//获取管理员公告
export const fetchAnnouncement = (): Promise<any> => {
    return basicService.get("/announcement")
}
interface IFetchAnnouncement {
    content: string
}
//添加公告
export const addAnnouncement = (params: IFetchAnnouncement): Promise<any> => {
    return basicService.post("/announcement", params);
}

//删除公告
export const deleteAnnouncement = (id: number): Promise<any> => {
    return basicService.delete(`/announcement/${id}`,)
}

//编辑公告
export const editAnnouncement = (id: number, params: IFetchAnnouncement) => {
    return basicService.patch(`/announcement/${id}`, params);
}
//查询公告

export const searchAnnouncement = (params: IFetchAnnouncement): Promise<any> => {
    return basicService.get(`/announcement`, { params });
}

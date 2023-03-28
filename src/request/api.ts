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

//获取评论
export const fetchComment = (): Promise<any> => {
    return basicService.get("/comment");
}
//搜索评论
interface IFetchComment {
    content: string
}
export const searchComment = (params: IFetchComment): Promise<any> => {
    return basicService.get("/comment", { params })
}

//删除评论
export const deleteComment = (id: number): Promise<any> => {
    return basicService.delete(`/comment/${id}`);
}

//获取回复
export const fetchReply = (params: { parentCommentId?: number | string | undefined }): Promise<any> => {
    return basicService.get("/reply", { params });
}
//删除回复
export const deleteReply = (id: number): Promise<any> => {
    return basicService.delete(`/reply/${id}`);
}

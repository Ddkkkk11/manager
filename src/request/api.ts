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
//获取菜单
export const fetchMenu = (): Promise<any> => {
    return basicService.get('/menu')
}

//获取仪表盘数据
export const fetDashboard = () => {
    return basicService.post('reservation/get_reservation');
}


//获取学生数据
interface IFetchStudent {
    student_name: string
}
export const fetchStudent = (params: IFetchStudent): Promise<any> => {
    return basicService.post(`/register/student`);
}
export const fetchOneStudent = (params: { username: string }) => {
    return basicService.post(`/register/student?username=${params.username}`)
}
//编辑学生
export const editStudent = (id: number, params: any) => {
    return basicService.patch(`/register/${id}`, params);
}
//删除学生
export const deleteStudent = (id: number) => {
    return basicService.delete(`register/${id}`);
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

//获取自习室
export const getRoom = (): Promise<any> => {
    return basicService.get('room');
}
//添加自习室
export const addRoom = (params: any): Promise<any> => {
    return basicService.post('room', params);
}

//通过描述查找自习室
export const getOneRoom = (description: string) => {
    return basicService.get(`room/${description}`);
}

//获取座位
export const getSeat = (roomId: string | undefined): Promise<any> => {
    return basicService.get(`seat/room/${roomId}`)
}
//通过座位编号查找座位
export const getSeatByNumber = (num:  string) => {
    return basicService.get(`seat/number/${num}`)
}

//添加座位
export const addSeat = (params: any): Promise<any> => {
    return basicService.post('seat', params);
}

//释放座位;
export const deleteSeat = (id: number) => {
    return basicService.delete(`seat/${id}`);
}

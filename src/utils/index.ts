interface ISetLocal {
    avatar: string,
    "cms-token": string,
    editable: string,
    player: string,
    username: string

}

//导入本地内存
export default function SetLocal(params: ISetLocal) {
    const itemArr = Object.keys(params);
    const itemVal = Object.values(params);
    const length = Object.keys(params)?.length;
    for (let i = 0; i < length; i++) {
        localStorage.setItem(itemArr[i], itemVal[i]);
    }
}

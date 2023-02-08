import React from "react";
import { Button } from "antd";
export default function Stream () {
    const onFetch =  async (url: string) => {
        const res = await fetch(url).then(res => res.arrayBuffer());
        const blog = new Blob([res]);
        const toUrl = URL.createObjectURL(blog);
        const a = document.createElement('a');
        a.href = toUrl;
        a.download = 'file.zip';
        a.click();
    }
    const downLoad = () => {
        // onFetch('http://localhost:4000/upload/stream'); //流文件处理
        window.open('http://localhost:4000/upload/export'); //直接下载
    }
    return (
        <>
            <Button onClick={() => downLoad()} type='primary' >
                DownLoad
            </Button>
        </>
    );
}

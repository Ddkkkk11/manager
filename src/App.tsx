import React, { useEffect, useState } from 'react';
import AdminMenu from "./components/menu";
import { Outlet, useNavigate } from "react-router-dom";
import MyBreadcrumb from "./components/Breadcrumb";
import User from './components/user';
import { getToken } from "./utils";
import { message } from "antd";
import './style.less'
function useErrorMessage(messageText: string, duration: number) {
    const [messageId, setMessageId] = useState(null);

    useEffect(() => {
        const id = message.error({ content: messageText, duration });
        // @ts-ignore
        setMessageId(id);
        // @ts-ignore
        return () => clearTimeout(id);
    }, [messageText, duration]);
    return messageId;
}
export default function App() {
    const navigate = useNavigate();
    const token = getToken();
    useErrorMessage('请先登录', 3);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <div className='layout'>
                <div className='layout-menu'>
                    <div className="menu">
                        <AdminMenu/>
                    </div>
                    <div className="user">
                        <User/>
                    </div>
                </div>
                <div className='layout-content'>
                    <MyBreadcrumb/>
                    <div className='content'>
                        <Outlet/>
                    </div>
                </div>
                <footer style={{ position: "fixed", bottom: 0 }}>
                    <a href="https://beian.miit.gov.cn/" style={{ color: "#333" }}>&copy;2023 By 小薛
                        备案信息：陕ICP备2022014014号</a>
                </footer>
            </div>
        </>
    );
}


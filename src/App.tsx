import React from 'react';
import AdminMenu from "./components/menu";
import { Button, Layout } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";
import './style.less'

const { Header } = Layout;
export default function App() {

    const navigate = useNavigate();
    return (
        <>
            <div className='layout'>
                <div className='layout-menu'>
                    <div className="menu">
                        <AdminMenu/>
                    </div>
                </div>
                <div className='layout-content'>
                    <Header style={{ background: '#F7F9FE' }}>
                    </Header>
                    <div className='content'>
                        <Outlet/>
                    </div>
                </div>
                <footer>
                    <a href="https://beian.miit.gov.cn/" style={{ color: "#333" }}>&copy;2023 By 小薛
                        备案信息：陕ICP备2022014014号</a>
                </footer>
                <Button type='primary' onClick={() => navigate('/')}>退出</Button>
            </div>
        </>
    );
}


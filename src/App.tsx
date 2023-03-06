import React from 'react';
import AdminMenu from "./components/menu";
import { Outlet } from "react-router-dom";
import MyBreadcrumb from "./components/Breadcrumb";
import User from './components/user';
import './style.less'
export default function App() {
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
                <footer>
                    <a href="https://beian.miit.gov.cn/" style={{ color: "#333" }}>&copy;2023 By 小薛
                        备案信息：陕ICP备2022014014号</a>
                </footer>
            </div>
        </>
    );
}


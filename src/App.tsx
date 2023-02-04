import React, {useState} from 'react';
import AdminMenu from "./components/menu";
import { Layout } from 'antd';
import './assets/base.less'
import {Link} from "react-router-dom";

const {Header, Sider, Content, Footer} = Layout;
export default function App() {
    return (
        <>
            <Layout id='app'>
                <Layout className='nav_side'>
                    <AdminMenu/>
                    <Content>
                        <Link to={'/login'}></Link>
                    </Content>
                </Layout>
                <footer>
                    <a href="https://beian.miit.gov.cn/" style={{color: "#333"}}>&copy;2023 By 小薛
                        备案信息：陕ICP备2022014014号</a>
                </footer>
            </Layout>
        </>
    );
}


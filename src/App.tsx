import React from 'react';
import { Outlet } from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import './assets/base.less'
const { Header, Sider, Content, Footer } = Layout;
export default function App() {
    return (
        <>
            <Layout>
                <header>
                    Header
                </header>
                <Layout>
                    <Sider>
                        Sider
                    </Sider>
                </Layout>
                <Content className='home-content'>
                    11111111111
                    {/*<div>*/}
                    {/*    <Outlet/>*/}
                    {/*</div>*/}
                </Content>
                <footer style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                    &copy;2023 By 小薛
                    备案信息：陕ICP备2022014014号
                </footer>
            </Layout>

        </>
    );
}


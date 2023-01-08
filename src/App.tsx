import React, {useState} from 'react';
import logoImg from '../src/assets/logo.svg'
import {Outlet} from 'react-router-dom'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import './assets/base.less'

const {Header, Sider, Content, Footer} = Layout;
export default function App() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Layout id='app'>
                <Layout className='nav_sider'>
                    <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
                        <h1 style={{ color: '#333', textAlign: 'center'}}>Dashboard</h1>
                        <Menu
                            theme="light"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            className='nav_menu'
                            items={[
                                {
                                    key: '1',
                                    icon: <UserOutlined/>,
                                    label: 'nav 1',
                                },
                                {
                                    key: '2',
                                    icon: <VideoCameraOutlined/>,
                                    label: 'nav 2',
                                },
                                {
                                    key: '3',
                                    icon: <UploadOutlined/>,
                                    label: 'nav 3',
                                },
                            ]}
                        />
                    </Sider>
                </Layout>
                <Layout>
                    <Content>
                        123123213
                    </Content>
                </Layout>
                <footer>
                    &copy;2023 By 小薛
                    备案信息：陕ICP备2022014014号
                </footer>
            </Layout>
        </>
    );
}


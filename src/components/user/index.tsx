import React from 'react';
import { Avatar, Dropdown, Menu, message } from 'antd';
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

const url = 'https://tucdn.wpon.cn/2023/02/25/8af8ac480bcd7.jpg';
export default function User() {

    const navigate = useNavigate();
    const onLogout = () => {
        navigate('/');
        message.success("已经退出登录");
    }

    const menu = (
        <Menu>
            <Menu.Item key="logout" icon={<LogoutOutlined/>} onClick={() => onLogout()}>
                退出登录
            </Menu.Item>
        </Menu>
    )
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Avatar size={24} src={<img src={url} alt="avatar"/>} style={{ cursor: 'pointer', fontSize: 12, color: '#fff', backgroundColor: '#4278FF' }}>
                {/*{"a".toUpperCase()}*/}
            </Avatar>
        </Dropdown>

    )
}

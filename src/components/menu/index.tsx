import { HomeOutlined, ExperimentOutlined, GlobalOutlined, CrownOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { fetchMenu } from "../../request/api";
const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
const ROUTE_ICON_MAP = {
    'HomeOutlined': <HomeOutlined/>,
    'ExperimentOutlined': <ExperimentOutlined/>,
    'GlobalOutlined': <GlobalOutlined/>,
    'CrownOutlined': <CrownOutlined/>,
}
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
const items: MenuProps['items'] = [
    getItem('Dashboard', 'sub1', <HomeOutlined />),
    getItem('Test1', 'sub2', <ExperimentOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
    ]),
    getItem('Test2', 'sub4', <GlobalOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),

]
export default function AdminMenu() {
    const [collapsed, setCollapsed] = useState(false);
    useEffect( () => {
        fetchMenu().then( res => {
            console.log('res', res.data)
        })
    }, [])
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                className='nav_menu'
                items={items}
            >
            </Menu>
        </Sider>
    )
}
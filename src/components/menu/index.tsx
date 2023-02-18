import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { fetchMenu } from "../../request/api";
import { CrownOutlined, ExperimentOutlined, GlobalOutlined, HomeOutlined } from '@ant-design/icons';
import { MenuI } from "../../../typing/type";

const ROUTE_ICON_MAP: any = {
    'HomeOutlined': <HomeOutlined/>,
    'ExperimentOutlined': <ExperimentOutlined/>,
    'GlobalOutlined': <GlobalOutlined/>,
    'CrownOutlined': <CrownOutlined/>,
}
const getIcon = (icon: string) => {
    const IconEl = ROUTE_ICON_MAP[icon];
    if (!IconEl) {
        return <></>;
    }
    return IconEl;
}
export default function AdminMenu() {
    const [menuList, setMenuList] = useState<MenuI[]>([]);
    useEffect(() => {
        if (!menuList.length) {
            fetchMenu().then(res => {
                setMenuList(res.data);
            });
        }
    }, []);
    if (!menuList.length) {
        return null;
    }
    const renderMenu = (list: MenuI[]) => {
        return list.map((item: MenuI) => {
            if (item.children) {
                return (
                    <Menu.SubMenu icon={getIcon(item.icon as string)} title={item.name} key={item.id}>
                        {renderMenu(item.children)}
                    </Menu.SubMenu>
                )
            }
            return <Menu.Item icon={getIcon(item.icon as string)} key={item.id}><a
                href={item.route}>{item.name}</a></Menu.Item>;
        })
    }
    return (
        <Menu
            style={{ height: '100%', background: 'transparent' }}
            mode="inline">
            {renderMenu(menuList)}
        </Menu>
    );
}

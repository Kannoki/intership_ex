import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import {
    UserOutlined,
    AppstoreOutlined,
    UsergroupAddOutlined,
    GlobalOutlined,
    SettingOutlined,
    BellOutlined,
    MailOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Avatar, Flex, Popover, Typography } from 'antd';
import './DefaultLayout.scss';
import { Content } from 'antd/es/layout/layout';
import Pages from '../pages';
import routes from '../config/routes';

interface PagesProps {
    children: ReactNode;
}
const { Header } = Layout;

// navbar avatar
type MenuItem = Required<MenuProps>['items'][number];

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
    getItem('Tên Người Dùng', 'sub1', <MailOutlined />, []),
    getItem('Thông tin người dùng', 'sub2', <AppstoreOutlined />, []),
    { type: 'divider' },
    getItem('Cài đặt thông tin cá nhân', 'sub4', <SettingOutlined />, []),
    getItem('Xóa người dùng', 'sub5', <DeleteOutlined />, []),
];
const navAvatar = (
    <Menu style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" items={items} />
);

// const items1: MenuProps['items'] = [AppstoreOutlined, UsergroupAddOutlined, GlobalOutlined, SettingOutlined].map(
//     (icon, index) => {
//         const key = String(index + 1);

//         return {
//             key: `sub${key}`,
//             icon: React.createElement(icon),
//         };
//     },
// );

const items1: MenuProps['items'] = [
    getItem(<NavLink to={routes.home}></NavLink>, 'sub1', <AppstoreOutlined />),
    getItem(<NavLink to={routes.usermanage}></NavLink>, 'sub2', <UsergroupAddOutlined />),
    getItem(<NavLink to={routes.devicemanage}></NavLink>, 'sub3', <GlobalOutlined />),
    getItem(<NavLink to={routes.home}></NavLink>, 'sub4', <SettingOutlined />),
];
const DefaultLayout: React.FC<PagesProps> = ({ children }) => {
    return (
        <Layout>
            <Header className="header">
                <Flex className="headerLayout">
                    <div className="demo-logo">
                        <Typography.Text className="titleMindHeader">MIND</Typography.Text>
                        <Typography.Text className="titlePortalHeader">PORTAL</Typography.Text>
                    </div>
                    <Menu
                        className="IconHeader"
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['sub1']}
                        items={items1}
                    />
                    <div className="GroupIconAvt">
                        <BellOutlined className="IconBell" />
                        <Popover content={navAvatar}>
                            <Avatar className="avatarIcon" size={40} icon={<UserOutlined />} />
                        </Popover>
                    </div>
                </Flex>
            </Header>
            <Content className="contentLayout">
                <Pages>{children}</Pages>
            </Content>
        </Layout>
    );
};

export default DefaultLayout;

import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Typography, Layout } from 'antd';
import '../UserManage/UserManage.scss';
import { Content, Header } from 'antd/es/layout/layout';
import DeviceList from './DeviceList';
import DeviceOverview from './DeviceOverview';
import DeviceSetting from './DeviceSetting';

const items: MenuProps['items'] = [
    {
        label: 'Tổng quan',
        key: 'nav1',
    },
    {
        label: 'Danh sách thiết bị',
        key: 'nav2',
    },
    {
        label: 'Cài đặt thiết bị ',
        key: 'nav3',
    },
];

const listComponent = [
    {
        key: 'nav1',
        component: <DeviceOverview />,
    },
    {
        key: 'nav2',
        component: <DeviceList />,
    },
    {
        key: 'nav3',
        component: <DeviceSetting />,
    },
];

const UserManage: React.FC = () => {
    const [current, setCurrent] = useState('nav1');
    const [indexNav, setIndexNav] = useState(<DeviceOverview />);

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };
    useEffect(() => {
        listComponent.map((listComponent, index) => {
            if (listComponent.key === current) {
                setIndexNav(listComponent.component);
            }
        });
    }, [current]);

    return (
        <Layout>
            <Header className="boxNavUserManage">
                <Typography.Text className="titleUserManage">QUẢN LÝ NGƯỜI DÙNG</Typography.Text>
                <Menu
                    className="navUserManage"
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                />
            </Header>

            <Content>{indexNav}</Content>
        </Layout>
    );
};

export default UserManage;

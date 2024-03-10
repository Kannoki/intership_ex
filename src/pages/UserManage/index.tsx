import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Typography, Layout } from 'antd';
import './UserManage.scss';
import { Content, Header } from 'antd/es/layout/layout';
import UseTable from './UserTable';
import OverView from './OverView';
import ExperimentUser from './ExperimentUser';

const items: MenuProps['items'] = [
    {
        label: 'Tổng quan',
        key: 'nav1',
    },
    {
        label: 'Danh sách người dùng',
        key: 'nav2',
    },
    {
        label: 'Người dùng thử nghiệm ',
        key: 'nav3',
    },
];

const listComponent = [
    {
        key: 'nav1',
        component: <OverView />,
    },
    {
        key: 'nav2',
        component: <UseTable />,
    },
    {
        key: 'nav3',
        component: <ExperimentUser />,
    },
];

const UserManage: React.FC = () => {
    const [current, setCurrent] = useState('nav1');
    const [indexNav, setIndexNav] = useState(<OverView />);

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

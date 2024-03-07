import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Typography, Layout } from 'antd';
import './UserManage.scss';
import { Content, Header } from 'antd/es/layout/layout';
import UseTable from './UserTable';

const items: MenuProps['items'] = [
    {
        label: 'Tổng quan',
        key: 'mail',
    },
    {
        label: 'Danh sách người dùng',
        key: 'app',
    },
    {
        label: 'Người dùng thử nghiệm ',
        key: 'SubMenu',
    },
];

const UserManage: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

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

            <Content>
                <UseTable />
            </Content>
        </Layout>
    );
};

export default UserManage;

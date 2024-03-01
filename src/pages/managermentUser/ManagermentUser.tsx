import React from 'react';
import styles from './managerment.module.scss'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import UserList from '../../components/userlist/UserList';
import UserTrial from '../../components/usertrial/UserTrial';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Tổng quan',
        children: 'nothing',
    },
    {
        key: '2',
        label: 'Danh sách người dùng',
        children: <UserList />,
    },
    {
        key: '3',
        label: 'Người dùng thử nghiệm',
        children: <UserTrial />,
    },
];

const ManagermentUser = () => {
    const Title = (<p className={styles.title}>Quản lý người dùng</p>)
    return (
        <div className={styles.container}>
            <Tabs
                defaultActiveKey="2"
                items={items}
                tabBarExtraContent={Title}
            />
        </div>
    )
}

export default ManagermentUser;
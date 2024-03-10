import styles from '../../styles/users/UsersManagerment.module.css';
import React from 'react';
import { Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';
import UsersAll from './usersAll/UsersAll';
import UsersList from './usersList/UsersList';
import UsersTesting from './usersTesting/UsersTesting';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tổng quan',
    children: <UsersAll />,
  },
  {
    key: '2',
    label: 'Danh sách người dùng',
    children: <UsersList />,
  },
  {
    key: '3',
    label: 'Người dùng thử nghiệm',
    children: <UsersTesting />,
  },
];

const UsersManagerment: React.FC = () => {
  const { Title } = Typography;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Title level={5}>Quản lý người dùng</Title>
        </div>
        <div className={styles.table}>
          <Tabs
            defaultActiveKey='1'
            items={items}
            style={{ padding: '0 40px' }}
          />
        </div>
      </div>
    </>
  );
};

export default UsersManagerment;

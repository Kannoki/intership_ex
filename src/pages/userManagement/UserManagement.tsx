import { FC } from "react";
import { Tabs, TabsProps, Typography } from 'antd';
import styles from './UserManagement.module.scss'
import UserList from "./UserList/UserList";
import TestUser from "./TestUser/TestUser";

const { Title } = Typography;

const UserManagement: FC = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Tổng quan',
            children: 'Content of Tab',
        },
        {
            key: '2',
            label: 'Danh sách người dùng',
            children: <UserList />
            ,
        },
        {
            key: '3',
            label: 'Người dùng thử nghiệm',
            children: <TestUser />
        }
    ];

    return (
        <>
        <div className={styles.container}>
            <div className={styles.menuTitle}>
                <Title level={5}>QUẢN LÝ NGƯỜI DÙNG</Title>
                </div>
            <div className={styles.menu}>
                <Tabs 
                defaultActiveKey="1" 
                centered
                items={items} 
                style={{ 
                    width: '100%', 
                    margin: '0 5px 15px 15px',
                    padding: '20px',
                    }}/>
            </div>
        </div>
        </>

    )
}
export default UserManagement
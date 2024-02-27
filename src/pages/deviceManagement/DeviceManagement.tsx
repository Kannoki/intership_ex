import { FC } from "react";
import { Tabs, TabsProps, Typography } from 'antd';
import styles from './DeviceManagement.module.scss'
import DeviceList from "./deviceList/DeviceList";
import DeviceTypeList from "./deviceTypeList/DeviceTypeList";
import Header from "components/Layout/Header";


const { Title } = Typography;

const DeviceManagement: FC = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Tổng quan',
            children: 'Content of Tab',
        },
        {
            key: '2',
            label: 'Danh sách thiết bị',
            children: <DeviceList />
            ,
        },
        {
            key: '3',
            label: 'Danh sách loại thiết bị',
            children: <DeviceTypeList />
            ,
        }
    ];

    return (
        <>
        <Header />
        <div className={styles.container}>
            <div className={styles.menuTitle}>
                <Title level={5}>QUẢN LÝ THIẾT BỊ</Title>
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
export default DeviceManagement
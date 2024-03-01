import React, { useEffect } from 'react';
import styles from './managermentdevice.module.scss'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import DeviceList from '../../components/devicelist/DeviceList';
import DeviceSetting from '../../components/devicesetting/DeviceSetting';
import fetchDataTenant  from '../../api/deviceApi';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Tổng quan',
        children: 'nothing',
    },
    {
        key: '2',
        label: 'Danh sách thiết bị',
        children: <DeviceList />,
    },
    {
        key: '3',
        label: 'Cài đặt thiết bị',
        children: <DeviceSetting />,
    },
];

const ManagermentDevice = () => {
    const Title = (<p className={styles.title}>Quản lý thiết bị</p>)
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

export default ManagermentDevice;
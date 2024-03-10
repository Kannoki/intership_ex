import { Tabs, TabsProps, Typography } from 'antd';
import styles from '../../styles/device/DeviceManager.module.css';
import DeviceAll from './DeviceAll/DeviceAll';
import DeviceList from './DeviceList/DeviceList';
import DeviceSetting from './DeviceSetting/DeviceSetting';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tổng quan',
    children: <DeviceAll />,
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

const DeviceManager = () => {
  const { Title } = Typography;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Title level={5}>Quản lý thiết bị</Title>
        </div>
        <div className={styles.table}>
          <Tabs
            defaultActiveKey='1'
            items={items}
            style={{ padding: '0 20px' }}
          />
        </div>
      </div>
    </>
  );
};

export default DeviceManager;

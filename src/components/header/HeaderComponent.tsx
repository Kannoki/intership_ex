import { Avatar, Space, Tabs, TabsProps, Typography } from 'antd';
import styles from './Header.module.css';
import {
  UserOutlined,
  HomeOutlined,
  SettingOutlined,
  IeCircleFilled,
} from '@ant-design/icons';
import Home from '../../page/home/Home';
import UsersManagerment from '../../page/users/UsersManagerment';
import { useEffect, useState } from 'react';
import SettingPage from '../../page/setting/SettingPage';
import DeviceManager from '../../page/DeviceManagerment/DeviceManager';

type TabPosition = 'top' | 'bottom';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '',
    children: <Home />,
    icon: <HomeOutlined className={styles.icon} />,
  },
  {
    key: '2',
    label: '',
    children: <UsersManagerment />,
    icon: <UserOutlined className={styles.icon} />,
  },
  {
    key: '3',
    label: '',
    children: <DeviceManager />,
    icon: <IeCircleFilled className={styles.icon} />,
  },
  {
    key: '4',
    label: '',
    children: <SettingPage />,
    icon: <SettingOutlined className={styles.icon} />,
  },
];

const HeaderComponent = ({ tab = '1' }: { tab: string }) => {
  const { Text, Title } = Typography;
  const [tabPosition, setTabPosition] = useState<TabPosition>('top');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTabPosition('bottom');
      } else {
        setTabPosition('top');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={styles.header_container}>
      <div className={styles.container}>
        <div className={styles.mindName}>
          <Title
            level={3}
            style={{
              color: 'white',
              margin: '8px 2px 0 20px',
              fontWeight: 'bold',
            }}
            className={styles.mindNameItem}
          >
            MIND
          </Title>
          <Text style={{ color: 'white', marginTop: '12px', fontSize: '16px' }}>
            PORTAL
          </Text>
        </div>
        <div className={styles.table}>
          <Tabs
            tabPosition={tabPosition}
            defaultActiveKey={tab}
            items={items}
            style={{ padding: '0 0 10px' }}
            className={styles.tableDetails}
            centered
          />
        </div>
        <Space wrap size={16}>
          <Avatar
            size='large'
            icon={<UserOutlined />}
            className={styles.avatar}
          />
        </Space>
      </div>
    </div>
  );
};

export default HeaderComponent;

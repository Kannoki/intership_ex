import styles from '../../styles/Header.module.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  EditOutlined,
  UserOutlined,
  BellOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';

const NAV_LINKS = [
  {
    url: '/',
    icon: HomeOutlined,
  },
  {
    url: '/users',
    icon: UserOutlined,
  },
  {
    url: '/device',
    icon: EditOutlined,
  },
  {
    url: '/setting',
    icon: SettingOutlined,
  },
];

const fontSize = 18;

const Header = () => {
  const location = useLocation();
  const { Text, Title } = Typography;
  return (
    <>
      <Row className={styles.header}>
        <div className={styles.headerIdentifier}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>
            MIND
          </Text>
          <Title
            style={{
              marginLeft: '5px',
              marginTop: '16px',
              color: 'white',
              fontSize: 20,
            }}
          >
            Portal
          </Title>
        </div>
        <Col md={4} sm={0} xs={0}>
          <div className={styles.headerNavigation}>
            <div className={styles.nav}>
              {NAV_LINKS.map((item, index) => (
                <div
                  key={index}
                  style={{ display: 'inline', padding: '0 20px' }}
                >
                  <Link key={index} to={item.url}>
                    <item.icon
                      className={
                        location.pathname.startsWith(item.url) &&
                        item.url !== '/'
                          ? styles.active
                          : styles.item
                      }
                      style={{ fontSize }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <div className={styles.headerNavigation}>
          <div className={styles.nav}>
            <div style={{ display: 'inline', padding: '0 20px' }}>
              <BellOutlined className={styles.item} style={{ fontSize }} />
            </div>
            <div style={{ display: 'inline', padding: '0 20px' }}>
              <UserOutlined className={styles.item} style={{ fontSize }} />
            </div>
          </div>
        </div>
      </Row>
      <div className={`${styles.screen}`}>
        <div
          className={` ${styles.flex} ${styles['flex-col']} ${styles['space-y-4']}`}
          style={{ padding: 10 }}
        >
          <Outlet />
        </div>
      </div>
      <Row style={{ width: '100%' }}>
        <Col md={0} sm={24} xs={24}>
          <Row justify={'center'}>
            <div
              className={styles['site-navigation']}
              style={{ backgroundColor: 'white' }}
            >
              <div className={styles.nav}>
                {NAV_LINKS.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'inline',
                      padding: '0 20px',
                    }}
                  >
                    <Link key={index} to={item.url}>
                      <item.icon
                        style={
                          location.pathname.startsWith(item.url)
                            ? { color: 'white', backgroundColor: '#2948ff' }
                            : { color: '#2948ff' }
                        }
                        className={
                          location.pathname.startsWith(item.url)
                            ? styles.active
                            : styles.item
                        }
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Header;

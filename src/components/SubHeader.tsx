// import { Typography } from 'antd'
import { Col, Row, Typography } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from '../styles/sub-header.module.scss'
// const { Text, Title } = Typography

interface SubHeaderProps {
    label: string;
    items: {
        label: string;
        url: string;
    }[];
}

const { } = Typography;

const SubHeader = (props: SubHeaderProps) => {
    const { pathname } = useLocation()
    const { label, items } = props;
    return (
        <>

            <Row align={"middle"} style={{ width: '100%', background: '#fff', padding: 20 }}>
                <Col md={6} sm={24} xs={24}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 500 }}>{label}</span>
                </Col>
                <Col md={10} xs={24} sm={24}>
                    <Row justify={'space-between'} align={'middle'} style={{ lineHeight: 3 }}>
                        {items.map((item) => (
                            <Link key={item.url} to={item.url} className={pathname === item.url ? styles.active : ''} style={{ fontSize: '0.7rem', fontWeight: 600 }}>{item.label}</Link>
                        ))}
                    </Row>
                </Col>
            </Row>

            <div style={{ margin: '10px 0' }}>
                <Outlet />
            </div>

        </>
    );
};

export default SubHeader;

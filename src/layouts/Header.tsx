
import styles from '../styles/header.module.scss'
import { Outlet } from 'react-router-dom'
import { HomeOutlined, PlayCircleOutlined, EditOutlined } from '@ant-design/icons'
const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h1 className={styles.mind}>MIND</h1>
                    <span>Portal</span>
                </div>
                <div className={styles.nav}>
                    <HomeOutlined />
                    <EditOutlined />
                    <PlayCircleOutlined />
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header
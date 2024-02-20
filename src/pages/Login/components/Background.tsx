import React from 'react'
import styles from '../styles/desktop-login.module.scss'
const Background = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <img className={styles["image-wrap"]} src="/images/background.jpg" alt="" />
            {children}
        </div>
    )
}

export default Background
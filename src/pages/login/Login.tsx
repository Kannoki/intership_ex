import React from 'react';
import styles from './login.module.scss'
import FormLogin from '../../components/form/FormLogin';



const Login = () => {
    return (
        <div className={styles.container}>
            <img src='./image/background.jpg' alt='background' className={styles.image} />
            <div className={styles.formCard}>
                <FormLogin />
            </div>
        </div>
    )
}

export default Login
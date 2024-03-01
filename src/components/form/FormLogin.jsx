import React, { useEffect, useState } from 'react'
import styles from './card.module.scss'
import login from '../../api/userApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../pages/login/userSlice';
import axiosClient from '../../api/axiosClient';

const FormLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleInputName = (e) => {
        setUsername(e.target.value);
    };

    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginEvent = async () => {

        // const user = await login({ username, password });
        // if (user) {
        //     dispatch(loginSuccess());
        //     localStorage.setItem('userCredentials', JSON.stringify(user))
        //     navigate('/')
        // } else {
        //     alert('Invalid user!');
        // }

        try {
            if (!username || !password) {
                throw new Error('Username and password are required');
            } else {
                const response = await axiosClient.post('/api/auth/login', {
                    username: username,
                    password: password
                });
                
                if (response.access_token) {
                    dispatch(loginSuccess());
                    localStorage.setItem('access_token', response.access_token);
                    navigate('/managerment/user')
                }
            }
             

        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    // useEffect(() => {
    //     axios.get('https://dummyjson.com/users')
    //         .then(res => console.log(res.data.users))
    //         .catch(err => console.log(err))
    // }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.titlepre}>Mind <span className={styles.titleback}>portal</span></span>
                <div className={styles.groupinput}>
                    <input
                        value={username}
                        autoComplete="username"
                        type="user"
                        name="user"
                        placeholder='Username'
                        className={styles.input}
                        onChange={handleInputName}
                        required
                    />
                    <input
                        value={password}
                        autoComplete="current-password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={styles.input}
                        onChange={handleInputPassword}
                        required
                    />
                </div>
                <button onClick={handleLoginEvent} className={styles.btnLogin} >Login</button>
            </div>
            <p className={styles.readyaccont}>Already have accunt? <span className={styles.linkLogin}>Login here</span></p>
        </div>
    )
}

export default FormLogin


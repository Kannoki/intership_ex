import { FC, useState } from 'react';
import styles from './Login.module.scss'
import { Typography } from 'antd';
import { Button, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login } from './authSlice';

const { Text, Title } = Typography;

const inputStyle: React.CSSProperties = {
    width: '400px',
    backgroundColor: 'transparent',
    color: 'white'
};

const Login: FC = () => {
    const [username, setUsername] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");

    const dispatch = useAppDispatch()

    const logging = useAppSelector(state => state.auth.logging)

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className={styles.bg}>
            <div className={styles.cardLogin}>
                <div className={styles.mindPortal}>
                    <Title level={3} style={{ color: 'white', marginRight: '2px' }}>MIND</Title>
                    <Text style={{ color: 'white', fontSize: '16px' }}>PORTAL</Text>
                </div>
                <div className={styles.loginForm}>
                    <Form
                        name="basic"
                        labelCol={{ span: 16 }}
                        wrapperCol={{ span: 16 }}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]
                            }
                        >
                            <Input style={inputStyle}
                                placeholder='Username'
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                style={inputStyle}
                                placeholder='Password'
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </Form.Item>

                        <Form.Item style={{ marginTop: '50px' }} >
                            {
                                logging
                                    ?
                                    <Button
                                        type="primary"
                                        loading
                                        style={{ width: '400px' }}
                                    >
                                        Loading
                                    </Button>
                                    :
                                    <Button
                                        onClick={() => dispatch(login({ username, password }))}
                                        type="primary"
                                        style={{ width: '400px' }}
                                    >
                                        LOGIN
                                    </Button>
                            }

                        </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
    )
}


export default Login;
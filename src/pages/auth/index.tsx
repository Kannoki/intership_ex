import React from 'react';
import { useState, FC } from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { login } from './authSlice';
import './Login.scss';

// const cx = classNames.bind(style)

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    const logging = useAppSelector((state) => state.auth.logging);
    // console.log(logging);
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    return (
        <div className="loginPage">
            <Form
                className="formLogin"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                fields={[
                    {
                        name: 'username',
                        value: username,
                    },
                    {
                        name: 'password',
                        value: password,
                    },
                ]}
            >
                <Form.Item<FieldType> className="titleForm">
                    <Typography.Text className="titleMind">MIND</Typography.Text>
                    <Typography.Text className="titlePortal">PORTAL</Typography.Text>
                </Form.Item>
                <Form.Item<FieldType>
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="UserName" className="input" value="rrrr" onChange={handleUsernameChange} />
                </Form.Item>

                <Form.Item<FieldType>
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password
                        placeholder="PassWord"
                        className="input"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Form.Item>

                <Form.Item>
                    {logging ? (
                        <Button type="primary" loading style={{ width: '400px' }}>
                            Loading
                        </Button>
                    ) : (
                        <Button
                            className="buttonSubmit"
                            onClick={() => dispatch(login({ username, password }))}
                            type="primary"
                        >
                            Submit
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;

import React from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
// import classNames from 'classnames/bind';
import './Login.css';

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

const Login: React.FC = () => (
    <div className="loginPage">
        <Form
            className="formLogin"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType> className="titleForm">
                {/* <Typography.Title className="titleMind">MIND</Typography.Title>
                <Typography.Title className="titlePortal">PORTAL</Typography.Title> */}
            </Form.Item>
            <Form.Item<FieldType> name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input placeholder="UserName" className="input" />
            </Form.Item>

            <Form.Item<FieldType> name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder="PassWord" className="input" />
            </Form.Item>

            <Form.Item>
                <Button className="buttonSubmit" type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
);

export default Login;

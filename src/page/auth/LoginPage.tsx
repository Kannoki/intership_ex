import { useState } from 'react';
import styles from './LoginPage.module.css';
import { Button, Form, Input, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { authLogin } from '../../app/slice/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const inputStyle: React.CSSProperties = {
  color: 'white',
  width: '420px',
  backgroundColor: 'transparent',
};

export default function LoginPage() {
  const { Text, Title } = Typography;
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logging = useAppSelector((state) => state.auth.logging);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(authLogin({ username, password }));
    navigate('/users');
  };
  return (
    <div className={styles.background}>
      <div className={styles.cardFromLogin}>
        <div className={styles.mindName}>
          <Title
            level={3}
            style={{ color: 'white', marginRight: '2px', fontWeight: 'bold' }}
          >
            MIND
          </Title>
          <Text style={{ color: 'white', fontSize: '16px' }}>PORTAL</Text>
        </div>
        <div className={styles.loginForm}>
          <Form
            name='basic'
            labelCol={{ span: 16 }}
            wrapperCol={{ span: 16 }}
            autoComplete='off'
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
            <Form.Item
              name='username'
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input
                className={styles.input}
                style={inputStyle}
                placeholder='Enter your username'
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Item>

            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Enter input your password!' },
              ]}
            >
              <Input.Password
                className={styles.input}
                style={inputStyle}
                placeholder='Enter your password'
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Item>

            <Form.Item style={{ marginTop: '40px', marginBottom: '18px' }}>
              {logging ? (
                <Button type='primary' loading style={{ width: '400px' }}>
                  Loading
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  type='primary'
                  className={styles.loginButton}
                >
                  LOGIN
                </Button>
              )}
            </Form.Item>
            <div className={styles.authFooter}>
              <Text style={{ color: 'white' }}>Already have an account?</Text>
              <Link to='/register' className={styles.registerLink}>
                Register
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

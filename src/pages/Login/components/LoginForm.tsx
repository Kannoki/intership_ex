import { Button, Card, Form, Input, Typography, Col, Row, message, Grid } from 'antd'
import styles from '../styles/desktop-login.module.scss'
import login from '../apis/login'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const { Title } = Typography
const { useBreakpoint } = Grid

type FormType = {
  username: string
  password: string
}

const FormLogin = () => {

  const [form] = Form.useForm<FormType>()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const screens = useBreakpoint()

  const handleSignIn = async (values: FormType) => {
    const { username, password } = values
    setLoading(true)
    await login(username, password)
    setLoading(false)
    navigate('/')
    message.success('Login success!')
  }
  const handleShowPosition = () => {
    if (screens.lg || screens.xxl || screens.xl) {
      return 'end'
    }
    return 'center'
  }
  const handlePadding = () => {
    if (screens.lg || screens.xxl || screens.xl) {
      return { marginRight: 20, width: '100%' }
    }
    return { marginRight: 0, width: '100%' }
  }
  return (
    <Row justify={handleShowPosition()} style={handlePadding()}>
      <Col md={10} sm={20}>
        <Card className={styles.card}>
          <span className={styles.title}>
            <Title level={1} className={styles["child-title"]}>Mind </Title>
            <Title level={5} className={styles["child-title"]}>Portal</Title>
          </span>
          <Form layout='vertical' form={form} onFinish={handleSignIn}>
            <Form.Item name="username" rules={[
              {
                required: true,
                message: 'Please enter username!'
              }
            ]}>
              <Input placeholder='Username' className={styles.input} />
            </Form.Item>
            <Form.Item name='password' rules={[
              {
                required: true,
                message: 'Please enter password!'
              }
            ]}>
              <Input.Password placeholder='Password' className={styles.input} />
            </Form.Item>
            <Form.Item name='password'>
              <Button style={{ minWidth: '100%' }} type='primary' htmlType='submit' loading={loading}>LOG IN</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row >

  )
}

export default FormLogin
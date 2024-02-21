import { Button, Card, Form, Input, Typography, Col, Row, message, Grid } from 'antd'
import styles from '../styles/desktop-login.module.scss'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { signInAsync } from '../pages/Login/authSlice'
import { UserType } from '../models'
const { Title } = Typography
const { useBreakpoint } = Grid

const FormLogin = () => {

  const [form] = Form.useForm<UserType>()
  const user = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const screens = useBreakpoint()
  const { loading } = user
  const handleSignIn = async (values: UserType) => {
    await dispatch(signInAsync(values))
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
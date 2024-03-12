import { Button, Card, Col, Divider, Flex, Image, Row, Space, Typography } from 'antd'
import { FaRegTrashAlt, FaInfoCircle } from "react-icons/fa";
import image from '../images/saitama.webp'
import { QrcodeOutlined } from '@ant-design/icons'
import styles from '../styles/card-device.module.scss'
const { Text } = Typography
const CardDevice = () => {
    return (
        <Card bodyStyle={{ padding: 2 }} className={styles.card}>
            <Row justify={'space-between'}>
                <Col md={10} sm={0} xs={0}>
                    <Image src={image} preview={false} height={'100%'} className={styles.image} />
                </Col>
                <Col md={14} sm={24}>
                    <Row className={styles.content}>
                        <Space direction='vertical'>
                            <Flex vertical justify='flex-end'>
                                <Row align={'middle'} justify={'space-between'}>
                                    <Text className={styles.title}>Energy Device 1CT</Text>
                                    <Button icon={<QrcodeOutlined />} type='text' />
                                </Row>
                                <Divider />
                            </Flex>

                            <Flex>
                                <Col span={10}>
                                    <Space direction='vertical'>
                                        <Text className={styles.property}>Gateway</Text>
                                        <Text className={styles.property}>Ngày tạo</Text>
                                        <Text className={styles.property}>Số TB lắp đặt</Text>
                                        <Text className={styles.property}>Mô tả</Text>
                                    </Space>
                                </Col>
                                <Col span={14}>
                                    <Space direction='vertical'>
                                        <Text style={{ color: '#2948FF' }}>True</Text>
                                        <Text>20/05/2020</Text>
                                        <Text>412</Text>
                                        <Text>Thiết bị đo năng lượng kẹp dây 1 ct</Text>
                                    </Space>
                                </Col>

                            </Flex>
                            <Flex justify='flex-end'>
                                <Col span={4}>
                                    <FaInfoCircle style={{ color: 'green', cursor: 'pointer' }} size={20} />
                                </Col>
                                <Col span={4}>
                                    <FaRegTrashAlt style={{ color: 'red', cursor: 'pointer' }} size={20} />
                                </Col>
                            </Flex>
                        </Space>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}

export default CardDevice
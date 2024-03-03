import { CSSProperties, FC, useState } from "react";
import styles from './DeviceTypeList.module.scss'
import { Flex, Form, Image, Input, Modal, Segmented, Typography } from "antd";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { SearchProps } from "antd/es/input";
import { deviceTypeData } from "../deviceList/DeviceData";
import { RiFileAddFill } from "react-icons/ri";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { PiWarningCircleLight } from "react-icons/pi";
import { FaListUl } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import DeviceTypeListTable from "./DeviceTypeListTable";

const { Text } = Typography
const { Search } = Input

const titleStyle: CSSProperties = {
    fontStyle: 'italic',
    fontSize: '15px'
}

const textStyle: CSSProperties = {
    fontSize: '15px'
}
const DeviceTypeList: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewType, setViewType] = useState('List');

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className={styles.userListContainer}>
            <Modal title="Tạo thiết bị mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
            >
                <Form
                    name="complex-form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 350, height: '200px', lineHeight: '10px' }}
                    layout="vertical"
                >
                    <Form.Item style={{ marginBottom: 0 }}>
                        <Form.Item>
                            <Text style={{ fontWeight: 'bold' }}>Thông tin thiết bị</Text>
                        </Form.Item>
                        <Form.Item label="Mã thiết bị">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Model">
                            <Input />
                        </Form.Item>
                    </Form.Item>
                </Form>
            </Modal>
            <div className={styles.titleBar}>
                <div className={styles.leftTitle}>
                    <MdOutlineSupervisorAccount style={{ fontSize: '24px' }} />
                    <Text style={{ fontWeight: 'bold' }}>Danh sách loại thiết bị</Text>
                </div>
                <div className={styles.rightTitle}>

                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    <Segmented
                        options={[
                            { value: 'List', icon: <BiCategory /> },
                            { value: 'Kanban', icon: <FaListUl /> },
                        ]}
                        onChange={(value) => {
                            setViewType(value)
                        }}
                    />
                    <RiFileAddFill
                        style={{
                            fontSize: '32px',
                            color: '#1890FF'
                        }}
                        onClick={showModal}
                    />
                </div>
            </div>

            {viewType === "List" ?
                <Flex wrap="wrap" gap="large" style={{ marginTop: '20px' }}>
                    {
                        deviceTypeData.map((deviceType) => {
                            return (
                                <div className={styles.deviceItemComponent} key={deviceType.key}>
                                    <div>
                                        <Image
                                            width={180}
                                            style={{ borderRadius: '10px' }}
                                            src={deviceType.image}
                                        />
                                    </div>
                                    <div className={styles.deviceContentContainer}>
                                        <div className={styles.textComponent}>
                                            <Text style={{ fontWeight: 'bold', fontSize: '18px' }}>{deviceType.name}</Text>
                                            <MdOutlineQrCodeScanner style={{ fontSize: '18px' }} />
                                        </div>
                                        <hr />
                                        <div className={styles.contentCard}>
                                            <div className={styles.textComponent}>
                                                <Text style={titleStyle}>Gate way: </Text>
                                                <Text style={{ fontWeight: 'bold', color: 'green' }}>{deviceType.gateWay.toString()}</Text>
                                            </div>
                                            <div className={styles.textComponent}>
                                                <Text style={titleStyle}>Ngày tạo: </Text>
                                                <Text style={textStyle}>{deviceType.createdAt}</Text>
                                            </div>
                                            <div className={styles.textComponent}>
                                                <Text style={titleStyle}>Số TB đã lắp đặt: </Text>
                                                <Text style={textStyle}>{deviceType.deviceNumber}</Text>
                                            </div>
                                            <div className={styles.textComponent}>
                                                <Text style={titleStyle}>Mô tả: </Text>
                                                <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>{deviceType.description}</Text>
                                            </div>
                                        </div>
                                        <div className={styles.iconContainer}>
                                            <PiWarningCircleLight style={{ fontSize: '24px', color: 'red' }} />
                                            <CiSettings style={{ fontSize: '24px', color: 'green' }} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Flex>
                :
                <DeviceTypeListTable />
            }

        </div>
    )
}

export default DeviceTypeList
import { FC, useState } from "react";
import styles from './UserList.module.scss'
import { Button, Form, Input, Modal, Table, TableColumnsType, TableProps, Typography } from "antd";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { VscFilterFilled } from "react-icons/vsc";
import { RiFileAddFill } from "react-icons/ri";
import { data } from "./UserData";
import moment from "moment";
import { DataType } from "models";

const { Text } = Typography

const columns: TableColumnsType<DataType> = [
    {
        title: 'Tên người dùng',
        dataIndex: 'name',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'numberPhone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
    },
    {
        title: 'Ngày bắt đầu',
        dataIndex: 'startDate',
        sorter: {
            compare: (a, b) =>
                moment(a.startDate).unix() - moment(b.startDate).unix()
        },
    },
];



const totalItems = data.length

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {

};
const UserList: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={styles.userListContainer}>
            <Modal title="Tạo người dùng mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
            >
                <Form
                    name="complex-form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 650, height: '450px', lineHeight: '10px' }}
                    layout="vertical"
                >
                    <Form.Item style={{ marginBottom: 0 }}>
                        <Form.Item>
                        <Text style={{ fontWeight: 'bold'}}>Thông tin cá nhân</Text>
                        </Form.Item>
                        <Form.Item
                            label="Họ"
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item
                            label="Tên"
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Số điện thoại">
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Mật khẩu"
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                        >
                            <Input.Password  />
                        </Form.Item>
                        <Form.Item
                            label="Nhập lại mật khẩu"
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                        >
                            <Input.Password  />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Địa chỉ">
                            <Input placeholder="abc@mind.vn"/>
                        </Form.Item>
                    </Form.Item>
                </Form>
            </Modal>
            <div className={styles.titleBar}>
                <div className={styles.leftTitle}>
                    <MdOutlineSupervisorAccount style={{ fontSize: '24px' }} />
                    <Text style={{ fontWeight: 'bold' }}>Danh sách người dùng</Text>
                </div>
                <div className={styles.rightTitle}>
                    <VscFilterFilled style={{ fontSize: '24px' }} />
                    <RiFileAddFill
                        style={{
                            fontSize: '24px',
                            color: '#1890FF'
                        }}
                        onClick={showModal}
                    />
                </div>
            </div>

            <div className={styles.table}>
                <Table
                    columns={columns}
                    dataSource={data}
                    onChange={onChange}
                />
                <div className={styles.footer}>
                    <div className={styles.leftFooter}>
                        <Button
                            style={{
                                borderColor: 'green',
                                color: 'green'
                            }}>
                            ...
                        </Button>
                        <Button danger>
                            Xóa
                        </Button>
                    </div>
                    <div>
                        <Text
                            style={{
                                fontSize: '14px',
                                fontWeight: 'bold',
                                marginRight: '20px'
                            }}>Total {totalItems} items
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList
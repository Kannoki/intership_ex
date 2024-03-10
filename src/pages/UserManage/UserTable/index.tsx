import { Table, Typography, Breakpoint, Button, Modal, Form, Input } from 'antd';
import { UsergroupAddOutlined, UserSwitchOutlined, PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import './UserTable.scss';
import { useState } from 'react';

// const { xs, sm, md, lg, xl, xxl } = Breakpoint;
const dataSource = [
    {
        key: '1',
        name: 'Mike',
        phonenumber: 32,
        email: 'hhh@gmail.com',
        address: '10 Downing Street',
        usetime: '12/10/2022',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Tên người dùng',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phonenumber',
        key: 'phonenumber',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address',
        // responsive: ['xxl'],
    },
    {
        title: 'Ngày bắt đầu sử dụng',
        dataIndex: 'usetime',
        key: 'usetime',
    },
];

const UseTable: React.FC = () => {
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
        <div className="boxListUser">
            <Modal title="Tạo người dùng mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="complex-form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 650, height: '450px', lineHeight: '10px' }}
                    layout="vertical"
                >
                    <Form.Item style={{ marginBottom: 0 }}>
                        <Form.Item>
                            <Typography.Text style={{ fontWeight: 'bold' }}>Thông tin cá nhân</Typography.Text>
                        </Form.Item>
                        <div className="nameInput">
                            <Form.Item label="Họ" style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Tên"
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <Form.Item className="nameInputMobile" label="Họ và Tên">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Số điện thoại">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Mật khẩu" style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Nhập lại mật khẩu"
                            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input placeholder="abc@mind.vn" />
                        </Form.Item>
                        <Form.Item label="Địa chỉ">
                            <Input />
                        </Form.Item>
                    </Form.Item>
                </Form>
            </Modal>
            <div className="headerListUser">
                <div>
                    <UsergroupAddOutlined />
                    <Typography.Text className="titleListUser">Danh sách người dùng</Typography.Text>
                </div>
                <div>
                    <UserSwitchOutlined />
                    <PlusOutlined className="createUserButt" onClick={showModal} />
                </div>
            </div>
            <Table className="tableUser" dataSource={dataSource} columns={columns} />
            <div className="buttEditTable">
                <Button type="primary" ghost>
                    <EllipsisOutlined />
                </Button>
                <Button type="primary" danger ghost>
                    Xóa
                </Button>
            </div>
        </div>
    );
};

export default UseTable;

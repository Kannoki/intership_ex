import { Table, Typography, Breakpoint, Button, Modal, Form, Input, Tag, TableColumnsType, TableProps } from 'antd';
import {
    UsergroupAddOutlined,
    UserSwitchOutlined,
    PlusOutlined,
    EllipsisOutlined,
    SettingOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import '../../UserManage/UserTable/UserTable.scss';
import { useState } from 'react';
import { data } from './DeviceListData';
import { Device } from '../../../models/device';
import { TableRowSelection } from 'antd/es/table/interface';

// const { xs, sm, md, lg, xl, xxl } = Breakpoint;
const columns: TableColumnsType<Device> = [
    {
        title: 'No.',
        render: () => <>01</>,
    },
    {
        title: 'Mã thiết bị',
        dataIndex: 'key',
    },
    {
        title: 'Model',
        dataIndex: 'model',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        render: (status) => (
            <>
                <Tag color={status === 'Connected' ? 'green' : 'red'}>{status}</Tag>
            </>
        ),
    },
    {
        title: 'Thời hạn bảo hành còn lại',
        dataIndex: 'expireDate',
    },
    {
        title: 'Tính năng',
        render: () => (
            <div>
                <SettingOutlined style={{ fontSize: '24px', color: 'green' }} />
                <DeleteOutlined style={{ fontSize: '24px', color: 'red' }} />
            </div>
        ),
    },
];

const totalItems = data.length;

const onChange: TableProps<Device>['onChange'] = (pagination, filters, sorter, extra) => {};

const DeviceList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<Device> = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys: any) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_: any, index: number) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys: any) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_: any, index: number) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };

    return (
        <div className="boxListUser">
            <Modal title="Tạo thiết bị mới" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="complex-form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 350, height: '200px', lineHeight: '10px' }}
                    layout="vertical"
                >
                    <Form.Item style={{ marginBottom: 0 }}>
                        <Form.Item>
                            <Typography.Text style={{ fontWeight: 'bold' }}>Thông tin thiết bị</Typography.Text>
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
            <Table
                className="tableUser"
                rowSelection={rowSelection}
                onChange={onChange}
                dataSource={data}
                columns={columns}
            />
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

export default DeviceList;

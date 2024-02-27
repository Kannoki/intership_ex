import { FC, useState } from "react";
import styles from './DeviceList.module.scss'
import { Button, Form, Input, Modal, Table, TableColumnsType, TableProps, Tag, Typography } from "antd";
import { MdOutlineDeleteOutline, MdOutlineSupervisorAccount } from "react-icons/md";
import { VscFilterFilled } from "react-icons/vsc";
import { RiFileAddFill } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { data } from "./DeviceData";
import { Device } from "models/device";
import { TableRowSelection } from "antd/es/table/interface";

const { Text } = Typography

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
                <Tag color={status === 'Connected' ? 'green' : 'red'}>
                    {status}
                </Tag>
            </>
        )
    },
    {
        title: 'Thời hạn bảo hành còn lại',
        dataIndex: 'expireDate',
    },
    {
        title: 'Tính năng',
        render: () => (
            <div>
                <CiSettings style={{ fontSize: '24px', color: 'green' }} />
                <MdOutlineDeleteOutline style={{ fontSize: '24px', color: 'red' }} />
            </div>
        )
    }
];



const totalItems = data.length

const onChange: TableProps<Device>['onChange'] = (pagination, filters, sorter, extra) => {

};


const DeviceList: FC = () => {
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
            onSelect: (changeableRowKeys) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
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
            onSelect: (changeableRowKeys) => {
              let newSelectedRowKeys = [];
              newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
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
                    <Text style={{ fontWeight: 'bold' }}>Danh sách thiết bị</Text>
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
                    rowSelection={rowSelection}
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

export default DeviceList
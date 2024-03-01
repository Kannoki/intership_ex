import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import styles from './userlist.module.scss'

interface DataType {
    key: string;
    name: string;
    phone: number;
    email: string;
    address: string;
    date: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Tên người dùng',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
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

    },
    {
        title: 'Ngày bắt đầu sử dụng',
        dataIndex: 'date',
        key: 'date',
    }
];

const data: DataType[] = [
    {
        key: '1',
        name: 'Vương',
        phone: 918607205,
        email: 'dphung.19it2@vku.udn.vn',
        address: 'dsds',
        date: '11/02/2022'
    },
    {
        key: '2',
        name: 'Vương',
        phone: 918607205,
        email: 'dphung.19it2@vku.udn.vn',
        address: 'dsds',
        date: '11/02/2022'
    },
    {
        key: '3',
        name: 'Vương',
        phone: 918607205,
        email: 'dphung.19it2@vku.udn.vn',
        address: 'dsds',
        date: '11/02/2022'
    },
    {
        key: '4',
        name: 'Vương',
        phone: 918607205,
        email: 'dphung.19it2@vku.udn.vn',
        address: 'dsds',
        date: '11/02/2022'
    },
];

const UserList: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperTitle}>
                <MdOutlineSupervisedUserCircle className={styles.icon} />
                <p className={styles.title}>Danh sách người dùng</p>
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
};

export default UserList;
import React from 'react'
import styles from './devicesetting.module.scss'
import { Table, TableProps } from 'antd';
import { IoCheckmark } from "react-icons/io5";
import { TbAccessPoint } from 'react-icons/tb';

interface DataType {
    key: string;
    name: string;
    model: string;
    number: string;
    date: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
    },
    {
        title: 'Gate',
        dataIndex: 'gate',
        render: () => (<IoCheckmark />)
    },
    {
        title: 'Số TB đã lắp đặt',
        dataIndex: 'number',
        key: 'number',

    },
    {
        title: 'Thời gian tạo',
        dataIndex: 'date',
        key: 'date',
    }
];

const data: DataType[] = [
    {
        key: '1',
        name: 'Energy Device 1CT',
        model: 'HTENG-300',
        number: '348',
        date: '30/02/2002'
    },
    {
        key: '2',
        name: 'Energy Device 1CT',
        model: 'HTENG-300',
        number: '348',
        date: '30/02/2002'
    },
    {
        key: '3',
        name: 'Energy Device 1CT',
        model: 'HTENG-300',
        number: '348',
        date: '30/02/2002'
    },
    {
        key: '4',
        name: 'Energy Device 1CT',
        model: 'HTENG-300',
        number: '348',
        date: '30/02/2002'
    }
];

const DeviceSetting = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperTitle}>
                <TbAccessPoint className={styles.iconAccess} />
                <p className={styles.title}>Danh sách loại thiết bị</p>
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default DeviceSetting
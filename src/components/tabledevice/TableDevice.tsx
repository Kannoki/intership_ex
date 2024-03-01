import React, { useEffect } from 'react'
import styles from './tabledevice.module.scss'
import { GoGear, GoTrash } from 'react-icons/go';
import { Table, TableColumnsType } from 'antd';
import fetchDataTenant from '../../api/deviceApi';

interface DataType {
    key: React.Key;
    no: number;
    code: string;
    model: string;
    status: number | string;
    peroid: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'No',
        dataIndex: 'no',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Mã thiết bị',
        dataIndex: 'code',
    },
    {
        title: 'Model',
        dataIndex: 'model',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
    },
    {
        title: 'Thời hạn bảo hành',
        dataIndex: 'peroid',
    },
    {
        title: 'Tính năng',
        dataIndex: 'action',
        render: () => (
            <div>
                <GoGear className={styles.iconEdit} />
                <GoTrash className={styles.iconEdit} />
            </div>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        no: 1,
        code: 'Vương',
        model: 'HTENG-300',
        status: 'Connected',
        peroid: '1 Ngày còn lại'
    },
    {
        key: '2',
        no: 1,
        code: 'Vương',
        model: 'HTENG-300',
        status: 'Connected',
        peroid: '1 Ngày còn lại'
    },
    {
        key: '3',
        no: 1,
        code: 'Vương',
        model: 'HTENG-300',
        status: 'Connected',
        peroid: '1 Ngày còn lại'
    },
    {
        key: '4',
        no: 1,
        code: 'Vương',
        model: 'HTENG-300',
        status: 'Connected',
        peroid: '1 Ngày còn lại'
    },
];


const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};
const TableDevice = () => {
    useEffect(() => {
        const access_token = localStorage.getItem('access_token') || '';;
        fetchDataTenant((access_token))
            .then(respone => {
                console.log(respone)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])
    return (
        <div>
            <Table
                rowSelection={{
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default TableDevice
import { FC } from "react";
import styles from '../deviceList/DeviceList.module.scss'
import { Table, TableColumnsType, TableProps, Typography } from "antd";
import { DeviceType } from "models/device";
import { deviceTypeData } from "../deviceList/DeviceData";
import { FaCheck } from "react-icons/fa6";

const { Text } = Typography

const columns: TableColumnsType<DeviceType> = [
    {
        title: 'Name',
        dataIndex: 'name'
    },
    {
        title: 'Gateway',
        render: (gateway) => (
            <>
                {gateway ? <FaCheck style={{ color: 'green' }} /> : <></>}

            </>
        )
    },
    {
        title: 'Số TB đã lắp đặt',
        dataIndex: 'deviceNumber',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.deviceNumber - b.deviceNumber,
    },
    {
        title: 'Thời gian tạo',
        dataIndex: 'createdAt',
       
    }
];



const totalItems = deviceTypeData.length

const onChange: TableProps<DeviceType>['onChange'] = (pagination, filters, sorter, extra) => {

};


const DeviceTypeListTable: FC = () => {

    return (
        <div style={{ marginTop: '20px'}}>

            <div className={styles.table}>
                <Table
                    columns={columns}
                    dataSource={deviceTypeData}
                    onChange={onChange}
                />
                <div className={styles.footer}>
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

export default DeviceTypeListTable
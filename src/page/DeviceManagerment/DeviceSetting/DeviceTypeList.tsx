import { FC } from 'react';
import styles from '../../../styles/device/DeviceList.module.css';
import { Table, TableColumnsType, TableProps, Typography } from 'antd';
import { FaCheck } from 'react-icons/fa6';
import { DeviceTypeList } from '../../../utils/device';
import { deviceTypeData } from './deviceTypeData';
import { CloseOutlined } from '@ant-design/icons';

const { Text } = Typography;

const columns: TableColumnsType<DeviceTypeList> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Model',
    dataIndex: 'model',
  },
  {
    title: 'Gateway',
    render: (gateway) => (
      <>
        {gateway.gateWay === true ? (
          <FaCheck style={{ color: 'green' }} />
        ) : (
          <CloseOutlined style={{ color: 'red' }} />
        )}
      </>
    ),
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
  },
];

const totalItems = deviceTypeData.length;

const onChange: TableProps<DeviceTypeList>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {};

const DeviceTypeListTable: FC = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <div className={styles.table}>
        <Table
          columns={columns}
          dataSource={deviceTypeData}
          onChange={onChange}
          virtual
          scroll={{ x: 2000, y: 400 }}
        />
      </div>
      <div className={styles.totalItemDevice}>
        <Text
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            marginRight: '20px',
          }}
          className={styles.footerTypeList}
        >
          Total {totalItems} items
        </Text>
      </div>
    </div>
  );
};

export default DeviceTypeListTable;

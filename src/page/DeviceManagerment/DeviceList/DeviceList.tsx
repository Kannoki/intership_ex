import { Table, TableColumnsType, TableProps, Tag, Typography } from 'antd';
import ModalAddDevice from '../../../components/ModalAddDevice';
import styles from '../../../styles/device/DeviceList.module.css';
import { DeviceType } from '../../../utils/device';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { dataDevice } from './DeviceListData';
import moment from 'moment';

const columns: TableColumnsType<DeviceType> = [
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
    title: 'Thời gian bảo hành còn lại',
    dataIndex: 'expireDate',
    sorter: {
      compare: (a: any, b: any) =>
        moment(a.expireDate).unix() - moment(b.expireDate).unix(),
    },
  },
  {
    title: 'Tính năng',
    render: () => (
      <div>
        <CiSettings style={{ fontSize: '24px', color: 'green' }} />
        <MdOutlineDeleteOutline style={{ fontSize: '24px', color: 'red' }} />
      </div>
    ),
  },
];

const totalDevice = dataDevice.length;

const onChange: TableProps<DeviceType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {};

const DeviceList = () => {
  const { Text } = Typography;
  return (
    <div>
      <ModalAddDevice />
      <div className={styles.tableComponent}>
        <Table
          columns={columns}
          dataSource={dataDevice}
          onChange={onChange}
          virtual
          scroll={{ x: 2000, y: 400 }}
        />
      </div>
      <div className={styles.totalItem}>
        <Text
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
            marginRight: '40px',
          }}
        >
          Total {totalDevice} items
        </Text>
      </div>
    </div>
  );
};

export default DeviceList;

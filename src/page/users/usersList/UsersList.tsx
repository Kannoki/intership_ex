import { Table, TableColumnsType } from 'antd';
import { dataSource } from './UsersData';
import moment from 'moment';
import ModalAddUser from '../../../components/ModalAddUsers';

interface RecordType {
  name: string;
  phone: string;
  email: string;
  location: string;
  startDate: string;
}

const columns: TableColumnsType<RecordType> = [
  {
    title: 'Tên người dùng',
    dataIndex: 'name',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'location',
  },
  {
    title: 'Ngày bắt đầu sử dụng',
    dataIndex: 'startDate',
    sorter: {
      compare: (a: any, b: any) =>
        moment(a.startDate).unix() - moment(b.startDate).unix(),
    },
  },
];

const UsersList = () => {
  return (
    <div>
      <ModalAddUser />
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default UsersList;

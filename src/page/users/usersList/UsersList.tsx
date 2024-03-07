import { Table } from 'antd';
import { dataSource } from './UsersData';
import moment from 'moment';
import ModalAddUser from '../../../components/ModalAddUser';

const columns = [
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

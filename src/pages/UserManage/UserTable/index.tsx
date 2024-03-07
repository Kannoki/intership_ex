import { Table } from 'antd';
import './UserTable.scss';

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        phonenumber: 32,
        email: 'hhh@gmail.com',
        address: '10 Downing Street',
        usetime: '12/10/2022',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Tên người dùng',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phonenumber',
        key: 'phonenumber',
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
        dataIndex: 'usetime',
        key: 'usetime',
    },
];

function UseTable() {
    return <Table className="tableUser" dataSource={dataSource} columns={columns} />;
}

export default UseTable;

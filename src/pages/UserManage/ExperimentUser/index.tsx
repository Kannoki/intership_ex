import React, { useEffect, useRef } from 'react';
import {
    DeleteOutlined,
    SettingOutlined,
    TeamOutlined,
    UserAddOutlined,
    UserSwitchOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons';
import { Table, Tag, Typography } from 'antd';
import { Chart as ChartJS } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import './ExperimentUser.scss';
import momentLibrary from 'moment';
import { ChartOptions, LinearScale, CategoryScale } from 'chart.js/auto';

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        email: 'hhh@gmail.com',
        group: 'fpt',
        phonenumber: 32,
        usetime: '12/10/2022',
        service: 'EMS',
        tinhnang: <UserAddOutlined />,
    },
];

const columns = [
    {
        title: 'Tên người dùng',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Mail đăng kí',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Tổ chức',
        dataIndex: 'group',
        key: 'group',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phonenumber',
        key: 'phonenumber',
        // responsive: ['xxl'],
    },
    {
        title: 'Ngày bắt đầu',
        dataIndex: 'startDate',
        sorter: {
            compare: (a: any, b: any) => momentLibrary(a.startDate).unix() - momentLibrary(b.startDate).unix(),
        },
    },
    {
        title: 'Dịch vụ',
        dataIndex: 'service',
        render: (service: any) => (
            <>
                <Tag color={service === 'EMS' ? 'orange' : 'green'}>{service}</Tag>
            </>
        ),
    },
    {
        title: 'Tính năng',
        render: () => (
            <div>
                <SettingOutlined style={{ fontSize: '24px', color: 'green' }} />
                <DeleteOutlined style={{ fontSize: '24px', color: 'red' }} />
            </div>
        ),
    },
];

function ExperimentUser() {
    return (
        <div>
            <div className="boxTagAndChart">
                {/* tổng quan người dùng */}
                <div className="TagInf">
                    <div className="TagInfItem">
                        <TeamOutlined className="IconTagInfItem" />
                        <div className="boxTitle">
                            <Typography.Text className="titleTagInfItem">Tổng số người dùng</Typography.Text>
                            <Typography.Text className="dataTagInfItem">40000</Typography.Text>
                        </div>
                    </div>
                    <div className="TagInfItem">
                        <UsergroupAddOutlined className="IconTagInfItem" />
                        <div className="boxTitle">
                            <Typography.Text className="titleTagInfItem">Người dùng mới trong năm</Typography.Text>
                            <Typography.Text className="dataTagInfItem">40000</Typography.Text>
                        </div>
                    </div>
                    <div className="TagInfItem">
                        <UserAddOutlined className="IconTagInfItem" />
                        <div className="boxTitle">
                            <Typography.Text className="titleTagInfItem">Người dùng mới trong tháng</Typography.Text>
                            <Typography.Text className="dataTagInfItem">40000</Typography.Text>
                        </div>
                    </div>
                </div>
                {/* biểu đồ */}
                <div>
                    <div></div>
                    <div className="boxChart"></div>
                </div>
            </div>
            {/* table */}
            <div className="headerListUser">
                <div>
                    <UsergroupAddOutlined />
                    <Typography.Text className="titleListUser">Danh sách người dùng</Typography.Text>
                </div>
                <div>
                    <UserSwitchOutlined />
                </div>
            </div>
            <Table className="tableUser" dataSource={dataSource} columns={columns} />
        </div>
    );
}

export default ExperimentUser;
function moment(startDate: any) {
    throw new Error('Function not implemented.');
}

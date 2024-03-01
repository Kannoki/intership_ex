import React, { useEffect, useState } from 'react'
import styles from './usertrial.module.scss'
import { Card, Col, DatePicker, Row, Table, TableProps } from 'antd'
import { HiMiniUsers, HiUser, HiUserGroup, HiUserPlus } from "react-icons/hi2";
import { GoGear, GoTrash } from "react-icons/go";
import LineChart from '../LineChart/LineChart';




interface DataType {
    key: string;
    name: string;
    email: string;
    organize: string;
    phone: number;
    timeregis: string;
    service: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Tên người dùng',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Mail đăng ký',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Tổ chức',
        dataIndex: 'organize',
        key: 'organize',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Thời gian đăng ký',
        dataIndex: 'timeregis',
        key: 'timeregis',

    },
    {
        title: 'Dịch vụ',
        dataIndex: 'service',
        key: 'service',
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
    }
];

const data: DataType[] = [
    {
        key: '1',
        name: 'Vương',
        email: 'dphung.19it2@vku.udn.vn',
        organize: 'Mind IOT',
        phone: 918607205,
        timeregis: '11/02/2022',
        service: 'Storage'
    },
    {
        key: '2',
        name: 'Vương',
        email: 'dphung.19it2@vku.udn.vn',
        organize: 'Mind IOT',
        phone: 918607205,
        timeregis: '11/02/2022',
        service: 'Storage'
    },
    {
        key: '3',
        name: 'Vương',
        email: 'dphung.19it2@vku.udn.vn',
        organize: 'Mind IOT',
        phone: 918607205,
        timeregis: '11/02/2022',
        service: 'Storage'
    },

];

const UserTrial = () => {

    return (
        <div>
            <Row gutter={16}>
                <Col span={8}>
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <HiUserGroup className={styles.icon} />
                                <div className={styles.userinfo}>
                                    <p className={styles.title}>Tổng số người dùng</p>
                                    <p className={styles.number}>41253</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <HiMiniUsers className={styles.icon} />
                                <div className={styles.userinfo}>
                                    <p className={styles.title}>Người dùng mới trong năm</p>
                                    <p className={styles.number}>41253</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <HiUser className={styles.icon} />
                                <div className={styles.userinfo}>
                                    <p className={styles.title}>Người dùng mới trong tháng</p>
                                    <p className={styles.number}>41253</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={16}>
                    <Card
                        size='small'
                        title={<div className={styles.contentChart}><HiUserPlus className={styles.icon} /><p className={styles.titleChart}>Biểu đồ người dùng thử nghiệm</p></div>}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '4px',
                            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                        }}>
                        <div className={styles.chart}>
                            <LineChart />
                        </div>
                    </Card>
                </Col>
            </Row>
            <div className={styles.tableUser}>
                <div className={styles.wrapperTitle}>
                    <HiMiniUsers className={styles.icon} />
                    <p className={styles.titleTable}>Danh sách người dùng mới</p>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    style={{
                        marginBottom: '16px',
                        borderRadius: '4px',
                    }}
                />
            </div>

        </div>
    )
}

export default UserTrial
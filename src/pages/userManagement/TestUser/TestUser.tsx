import { CSSProperties, FC, useEffect, useState } from "react";
import styles from './TestUser.module.scss'
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { DatePicker, DatePickerProps, Space, Table, TableColumnsType, TableProps, Tag, Typography } from "antd";
import { FaUserPlus } from "react-icons/fa";
import moment from "moment";
import { data, testUserData } from "../UserList/UserData";
import { DataType } from "../../../models";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import chartApi from "../../../api/chartApi";
import { Line } from "react-chartjs-2";
import { registerCharts } from "../../../utils/registerCharts";
import 'chartjs-adapter-moment'
import { chartColors } from "../../../utils/ChartColor";

registerCharts()
const { Text } = Typography;

const userNumberStyle: CSSProperties = {
    fontWeight: 'bold',
    fontSize: '32px',
    color: '#396AFC'
}

const userText: CSSProperties = {
    fontSize: '16px'
}

const iconUser: CSSProperties = {
    fontSize: '50px'
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Tên người dùng',
        dataIndex: 'name',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'numberPhone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Tổ chức',
        dataIndex: 'organization',
    },
    {
        title: 'Ngày bắt đầu',
        dataIndex: 'startDate',
        sorter: {
            compare: (a, b) =>
                moment(a.startDate).unix() - moment(b.startDate).unix()
        },
    },
    {
        title: 'Dịch vụ',
        dataIndex: 'service',
        render: (service) => (
            <>
                <Tag color={service === 'EMS' ? 'orange' : 'green'}>
                    {service}
                </Tag>
            </>
        )
    },
    {
        title: 'Tính năng',
        render: () => (
            <div>
                <CiSettings style={{ fontSize: '24px', color: 'green' }} />
                <MdOutlineDeleteOutline style={{ fontSize: '24px', color: 'red' }} />
            </div>
        )
    }
];

const totalItems = data.length

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {

};

const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const TestUser: FC = () => {

    const [chartData, setChartData] = useState<any>([])
    const tsData = chartData.total?.map((item: any) => {
        return item.ts
    });
    const chartList: { label: string; data: any, backgroundColor: string, borderColor: string, borderWidth: number }[] = []
    const [data, setData] = useState({
        labels: tsData || [],
        datasets: [
            {
                label: '',
                data: [],
                backgroundColor: '',
                borderColor: '',
                borderWidth: 1
            }
        ]
    });

    useEffect(() => {
        chartApi.getChartApi()
            .then((response: any) => setChartData(response))
    }, [])

    {
        let i: number = 0;
        for (const key in chartData) {
            const indexedItem = chartData[key];
            const chartItem = {
                label: key,
                data: indexedItem.map((item: any) => item.value),
                backgroundColor: chartColors[i],
                borderColor: chartColors[i],
                borderWidth: 1
            }
            chartList.push(chartItem)
            i += 1;
        }
    }

    useEffect(() => {
        setData({
            labels: tsData || [],
            datasets: chartList
        })
    }, [chartList])

    // const data = {
    //     labels: tsData || [],
    //     datasets: chartList
    // }

    const options = {
        scales: {
            x: {
                type: 'time' as const,
                time: {
                    unit: 'month' as const
                }
            }
        },
        plugins: {
            legend: {
                display: true,
            },
        }
    }

    return (
        <div className={styles.testUserComponent}>
            <div className={styles.statiscalComponent}>
                <div className={styles.statisticalCard}>
                    <div className={styles.statiscalItem}>
                        <FaUsers style={iconUser} />
                        <div className={styles.userNumber}>
                            <Text style={userText}>Tổng số người dùng</Text>
                            <Text style={userNumberStyle}>123</Text>
                        </div>
                    </div>
                    <div className={styles.statiscalItem}>
                        <FaUserFriends style={iconUser} />
                        <div className={styles.userNumber}>
                            <Text style={userText}>Người dùng mới trong tuần</Text>
                            <Text style={userNumberStyle}>1552365</Text>
                        </div>
                    </div>
                    <div className={styles.statiscalItem}>
                        <FaUserPlus style={iconUser} />
                        <div className={styles.userNumber}>
                            <Text style={userText}>Người dùng mới trong tháng</Text>
                            <Text style={userNumberStyle}>510</Text>
                        </div>
                    </div>
                </div>
                <div className={styles.chartUserComponent}>
                    <div className={styles.chartTitle}>
                        <div>
                            <FaUser />
                            <Text style={{ fontWeight: 'bold', marginLeft: '10px' }}>Biểu đồ người dùng thử nghiệm</Text>
                        </div>
                        <Space direction="vertical">
                            <DatePicker onChange={onChangeDate} />
                        </Space>
                    </div>
                    <div className="graph-container">
                        <Line options={options} data={data} style={{ maxHeight: '250px' }} />
                    </div>
                </div>
            </div>
            <div className={styles.tableComponent}>
                <Table
                    columns={columns}
                    dataSource={testUserData}
                    onChange={onChange}
                />
            </div>
            <div className={styles.totalItem}>
                <Text
                    style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        marginRight: '20px'
                    }}>Total {totalItems} items
                </Text>
            </div>
        </div>
    )
}
export default TestUser
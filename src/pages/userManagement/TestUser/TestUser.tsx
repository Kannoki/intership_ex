import { CSSProperties, FC, useEffect, useState } from "react";
import styles from './TestUser.module.scss'
import { FaUserFriends } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { DatePicker, DatePickerProps, Space, Table, TableColumnsType, TableProps, Tag, Typography } from "antd";
import { FaUserPlus } from "react-icons/fa";
import moment from "moment";
import { data, testUserData } from "../UserList/UserData";
import { DataType } from "models";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import chartApi from "api/chartApi";
import { Line } from "react-chartjs-2";
import { registerCharts } from "utils/registerCharts";
import { Chart } from 'chart.js';
import 'chartjs-adapter-moment'

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

    useEffect(() => {
        chartApi.getChartApi()
            .then(response => setChartData(response))
    }, [])

    const emsData = chartData.EMS?.map((item: any) => {
        return item.value;
    });
    const storageData = chartData.STORAGE?.map((item: any) => {
        return item.value;
    });
    const totalData = chartData.total?.map((item: any) => {
        return item.value;
    });
    const tsData = chartData.total?.map((item: any) => {
        return moment(item.ts).format('DD.MM.YYYY');
        // return item.ts
    });

    const options = {
        scales: {
          y: {
            title: {
              display: true,
              text: 'Test'
            }
          },
          x: {
           
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        }
      }

    const data = {
        labels: tsData || [],
        datasets: [{
            label: 'EMS',
            data: emsData || [],
            backgroundColor: [
                'rgb(153, 102, 255)'
            ],
            borderColor: [
                'rgb(153, 102, 255)'
            ],
            borderWidth: 1
        }, {
            label: 'STORAGE',
            data: storageData || [],
            backgroundColor: [
                'rgba(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255, 159, 64)'
            ],
            borderWidth: 1
        },
        {
            label: 'Total',
            data: totalData || [],
            backgroundColor: [
                'rgba(75, 192, 192)'
            ],
            borderColor: [
                'rgba(75, 192, 192)'
            ],
            borderWidth: 1
        }]
    }
    return (
        <div className={styles.testUserComponent}>
            <div className={styles.statiscalComponent}>
                <div className={styles.statisticalCard}>
                    <div className={styles.statiscalItem}>
                        <FaUsers style={iconUser} />
                        <div className={styles.userNumber}>
                            <Text style={userText}>Tổng số người dùng&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                            <Text style={userNumberStyle}>10000</Text>
                        </div>
                    </div>
                    <div className={styles.statiscalItem}>
                        <FaUserFriends style={iconUser} />
                        <div className={styles.userNumber}>
                            <Text style={userText}>Người dùng mới trong tuần</Text>
                            <Text style={userNumberStyle}>99999</Text>
                        </div>
                    </div>
                    <div className={styles.statiscalItem}>
                        <FaUserPlus style={iconUser} />
                        <div className={styles.userNumber}>
                            <Text style={userText}>Người dùng mới trong tháng</Text>
                            <Text style={userNumberStyle}>12345</Text>
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
                        {/* <Line options={options} data={data} style={{ maxHeight: '250px' }} /> */}
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
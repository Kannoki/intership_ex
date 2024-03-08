import { CSSProperties, FC, useEffect, useState } from 'react';
import styles from './UsersTesting.module.css';
import { HiUsers } from 'react-icons/hi';
import { HiUserGroup } from 'react-icons/hi';
import {
  DatePicker,
  DatePickerProps,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
  Typography,
} from 'antd';
import { HiUserPlus } from 'react-icons/hi2';
import moment from 'moment';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';
import { registerCharts } from '../../../utils/registerChatrs';
import { DataTypeTable } from '../../../utils/type';
import chartApi from '../../../api/chartApi';
import { chartColors } from '../../../utils/chartColors';
import { UserTestingData } from './UserTestData';

registerCharts();
const { Text } = Typography;

const cardNumber: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '32px',
  color: '#396AFC',
};

const userText: CSSProperties = {
  fontSize: '16px',
};

const iconUser: CSSProperties = {
  fontSize: '50px',
};

const columns: TableColumnsType<DataTypeTable> = [
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
        moment(a.startDate).unix() - moment(b.startDate).unix(),
    },
  },
  {
    title: 'Dịch vụ',
    dataIndex: 'service',
    render: (service) => (
      <>
        <Tag color={service === 'EMS' ? 'orange' : 'green'}>{service}</Tag>
      </>
    ),
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

const totalItems = UserTestingData.length;

const onChange: TableProps<DataTypeTable>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {};

const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const TestUser: FC = () => {
  const [chartData, setChartData] = useState<any>([]);
  const tsData = chartData.total?.map((item: any) => {
    return item.ts;
  });
  const chartList: {
    label: string;
    data: any;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[] = [];
  const [data, setData] = useState({
    labels: tsData || [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: '',
        borderColor: '',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    chartApi.getChartApi().then((response) => setChartData(response));
  }, []);

  {
    let i: number = 0;
    for (const key in chartData) {
      const indexedItem = chartData[key];
      const chartItem = {
        label: key,
        data: indexedItem.map((item: any) => item.value),
        backgroundColor: chartColors[i],
        borderColor: chartColors[i],
        borderWidth: 1,
      };
      chartList.push(chartItem);
      i += 1;
    }
  }

  useEffect(() => {
    setData({
      labels: tsData || [],
      datasets: chartList,
    });
  }, [chartList]);

  const options = {
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'month' as const,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className={styles.usersTestingComponent}>
      <div className={styles.usersComponents}>
        <div className={styles.usersCard}>
          <div className={styles.usersCardItem}>
            <HiUserGroup style={iconUser} />
            <div className={styles.userNumber}>
              <Text style={userText}>Tổng số người dùng&emsp;&emsp;&emsp;</Text>
              <Text style={cardNumber}>41253</Text>
            </div>
          </div>
          <div className={styles.usersCardItem}>
            <HiUsers style={iconUser} />
            <div className={styles.userNumber}>
              <Text style={userText}>Người dùng mới trong tuần</Text>
              <Text style={cardNumber}>41253</Text>
            </div>
          </div>
          <div className={styles.usersCardItem}>
            <HiUserPlus style={iconUser} />
            <div className={styles.userNumber}>
              <Text style={userText}>Người dùng mới trong tháng</Text>
              <Text style={cardNumber}>912</Text>
            </div>
          </div>
        </div>
        <div className={styles.chartUserComponent}>
          <div className={styles.chartTitle}>
            <div>
              <FaUser />
              <Text style={{ fontWeight: 'bold', marginLeft: '10px' }}>
                Biểu đồ người dùng thử nghiệm
              </Text>
            </div>
            <Space direction='vertical'>
              <DatePicker onChange={onChangeDate} />
            </Space>
          </div>
          <div className='graph-container'>
            <Line
              options={options}
              data={data}
              style={{ maxHeight: '250px' }}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableComponent}>
        <Table
          columns={columns}
          dataSource={UserTestingData}
          onChange={onChange}
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
          Total {totalItems} items
        </Text>
      </div>
    </div>
  );
};
export default TestUser;

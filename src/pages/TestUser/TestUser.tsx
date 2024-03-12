import {
    LoadingOutlined,
    UserAddOutlined,
    UserOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import styles from "../../styles/test-user.module.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    ChartOptions,
    TimeScale,
    TimeScaleOptions,
    TimeScaleTickOptions,
    TimeScaleTimeOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";
import { Spin, TablePaginationConfig, message } from "antd";
import {
    Card,
    Col,
    DatePicker,
    Flex,
    Grid,
    Row,
    Table,
    TableProps,
    Typography,
} from "antd";
import { columns, pagination } from "../UserManagerment/UserManagerment";
import { useEffect, useState } from "react";
import userApi from "../../apis/userApi";
import { ObjectType, RegisterChartResponse, UserType } from "../../models";
import moment from "moment";
import { generateColor } from "../../utils";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

// const labels = ["EMS", " STORAGE", "total"];

const { Text } = Typography;

const { getUser, getUserRegisterChart } = userApi;

interface UserInterface {
    users: UserType[];
    loading: boolean;
    pagination: TablePaginationConfig
}

const initialState: UserInterface = {
    users: [],
    loading: false,
    pagination: {
        pageSize: 10,
        current: 1
    }
};

const { useBreakpoint } = Grid;

const options: ChartOptions = {
    scales: {
        x: {
            ticks: {
                callback: function (val, index) {
                    const label = this.getLabelForValue(index) as ObjectType;
                    return moment(label.ts).format("DD/MM/YYYY");
                },
            },
        },
    },
};

const TestUser = () => {
    const [users, setUsers] = useState(initialState);
    const [data, setData] = useState<null | any>(null);
    const screens = useBreakpoint();

    const handleGetUsers = async () => {
        try {
            setUsers((prev) => ({ ...prev, loading: true }));
            const { pagination: { current, pageSize } } = users
            const result = await getUser(pageSize, current);
            const { data, total_elements } = result
            setUsers(prev => ({ users: data, loading: false, pagination: { ...prev.pagination, total: total_elements } }));
        } catch (error) {
            message.error("Somethinsg went wrong")
        }

    };
    const isMeddiumSize = () => {
        return screens.md || screens.lg || screens.xl || screens.xxl;
    };



    const handleGetUserRegister = async () => {
        const response = await getUserRegisterChart();

        const dataSet = Object.entries(response).map(([key, value]) => (
            {
                label: key,
                data: value,
                borderColor: generateColor(key),
                fill: false,
                parsing: {
                    xAxisKey: "ts",
                    yAxisKey: "value",
                }
            }
        ))
        const data = {
            labels: response.total,
            datasets: dataSet,
        };
        setData(data);
    };
    useEffect(() => {
        handleGetUsers();
        handleGetUserRegister();
    }, []);

    return (
        <div
            className={`${styles.flex} ${styles["flex-col"]} ${styles["space-y-4"]}`}
        >
            <Row justify={"space-between"} gutter={[16, 16]} align={"middle"}>
                <Col md={7} sm={24} xs={24}>
                    <Flex
                        justify={"space-between"}
                        align={"middle"}
                        vertical={isMeddiumSize()}
                        style={{ height: "100%" }}
                        className={
                            !isMeddiumSize()
                                ? ""
                                : `${styles.flex} ${styles["flex-col"]} ${styles["space-y-4"]}`
                        }
                    >
                        <Col md={24} sm={6} xs={10}>
                            <Card
                                style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                            >
                                <Row align={"middle"}>
                                    <UsergroupAddOutlined style={{ fontSize: "1.5rem" }} />
                                    <div className={styles["flex-col"]}>
                                        <span style={{ padding: 0 }}>Tổng số người dùng</span>
                                        <span className={styles["user-num"]}>41253</span>
                                    </div>
                                </Row>
                            </Card>
                        </Col>
                        <Col md={24} sm={6} xs={10}>
                            <Card
                                style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                            >
                                <Row align={"middle"}>
                                    <UsergroupAddOutlined style={{ fontSize: "1.5rem" }} />
                                    <div className={styles["flex-col"]}>
                                        <span style={{ padding: 0 }}>Tổng số người dùng</span>
                                        <span className={styles["user-num"]}>41253</span>
                                    </div>
                                </Row>
                            </Card>
                        </Col>
                        <Col md={24} sm={6} xs={0}>
                            <Card
                                style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                            >
                                <Row align={"middle"}>
                                    <UsergroupAddOutlined style={{ fontSize: "1.5rem" }} />
                                    <div className={styles["flex-col"]}>
                                        <span style={{ padding: 0 }}>Tổng số người dùng</span>
                                        <span className={styles["user-num"]}>41253</span>
                                    </div>
                                </Row>
                            </Card>
                        </Col>
                    </Flex>
                </Col>
                <Col md={16} sm={24} xs={24}>
                    <Card
                        title={
                            <Row justify={"space-between"} align={"middle"}>
                                <Col md={10} xs={17}>
                                    <Row align={"middle"}>
                                        <UserAddOutlined />
                                        <span>Biểu đồ người dùng thử nghiệm</span>
                                    </Row>
                                </Col>
                                <Col md={4} xs={6}>
                                    <DatePicker defaultValue={dayjs()} />
                                </Col>
                            </Row>
                        }
                        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height: isMeddiumSize() ? 350 : '100%' }}
                    >
                        {data ? (
                            <Line data={data} height={"100%"} options={options} />
                        ) : (
                            <Row justify={"center"}>
                                <Spin
                                    indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                                />
                            </Row>
                        )}
                    </Card>
                </Col>
            </Row>
            <Card
                style={{
                    height: "100%",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
            >
                <Row justify={"space-between"}>
                    <Row align={"middle"}>
                        <UserOutlined />
                        <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: "bold" }}>
                            Danh sách người dùng mới
                        </Text>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <UserOutlined />
                        </Col>
                    </Row>
                </Row>

                <Table
                    columns={columns}
                    dataSource={users.users}
                    pagination={pagination}
                    loading={users.loading}
                    style={{ marginTop: 10, overflowX: "scroll" }}
                />
            </Card>
        </div>
    );
};

export default TestUser;

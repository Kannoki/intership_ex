import {
  BarsOutlined,
  ControlOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Flex,
  Input,
  Row,
  Table,
  TablePaginationConfig,
  TableProps,
  Typography,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { UserType } from "../../models";
import { columns } from "../UserManagerment/UserManagerment";
import userApi from "../../apis/userApi";
import { BsFillRouterFill } from "react-icons/bs";
import { Pagination } from "antd";
import CardDevice from "../../components/CardDevice";

const { Text } = Typography;

interface UserInterface {
  users: UserType[];
  loading: boolean;
  pagination: TablePaginationConfig;
}

const initialState: UserInterface = {
  users: [],
  loading: false,
  pagination: {
    pageSize: 10,
    current: 1,
  },
};

type TableRowSelection<T> = TableProps<T>["rowSelection"];

const rowSelection: TableRowSelection<UserType> = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const ButtonGroup = Button.Group;

const { getUser } = userApi;

enum ShowEnum {
  table,
  list,
}

const Devicemanagerment = () => {
  const [users, setUsers] = useState(initialState);
  const [type, setType] = useState<ShowEnum>(ShowEnum.table);

  const handleGetUsers = async () => {
    try {
      setUsers((prev) => ({ ...prev, loading: true }));
      const {
        pagination: { current, pageSize },
      } = users;
      const result = await getUser(pageSize, current);
      const { data, total_elements } = result;
      setUsers((prev) => ({
        users: data,
        loading: false,
        pagination: { ...prev.pagination, total: total_elements },
      }));
    } catch (error) {
      message.error("Somethinsg went wrong");
    }
  };
  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <Card>
      <Row justify={"space-between"}>
        <Col md={14}>
          <Row align={"middle"}>
            <BsFillRouterFill />
            <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: "bold" }}>
              Danh sách thiết bị
            </Text>
          </Row>
        </Col>
        <Col md={10}>
          <Row justify={"end"}>
            <Row
              justify={"space-between"}
              align={"middle"}
              style={{ width: "100%" }}
            >
              <Col md={14}>
                <Input placeholder="Search" suffix={<SearchOutlined />} />
              </Col>
              <Col md={9}>
                <Flex justify={"space-between"}>
                  <Col md={15}>
                    <ButtonGroup>
                      <Button
                        icon={<BarsOutlined />}
                        type={type === ShowEnum.table ? "primary" : "default"}
                        onClick={() => setType(ShowEnum.table)}
                      />
                      <Button
                        icon={<ControlOutlined />}
                        type={type === ShowEnum.list ? "primary" : "default"}
                        onClick={() => setType(ShowEnum.list)}
                      />
                    </ButtonGroup>
                  </Col>
                  <Button icon={<PlusOutlined />} type="primary" />
                </Flex>
              </Col>
              <Row style={{ width: "100%", marginTop: 10 }} justify={"end"}>
                <Pagination defaultCurrent={1} total={35} pageSize={5} />
              </Row>
            </Row>
          </Row>
        </Col>
      </Row>
      {type === ShowEnum.list ? (
        <Row>
          {Array(12)
            .fill(undefined)
            .map(() => (
              <Col md={8} sm={12} xs={24}>
                <CardDevice />
              </Col>
            ))}
        </Row>
      ) : (
        <Table
          columns={columns}
          rowSelection={rowSelection}
          dataSource={users.users}
          pagination={users.pagination}
          loading={users.loading}
          style={{ marginTop: 10 }}
        />
      )}
    </Card>
  );
};

export default Devicemanagerment;

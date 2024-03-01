import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Table,
  Typography,
} from "antd";
import { ColumnsType } from "antd/es/table";
import { UserType } from "../../models";
import { useEffect, useState } from "react";
import userApi from "../../apis/userApi";

const { Text, Title } = Typography;

export const pagination = {
  pageSize: 5,
};

export const columns: ColumnsType<UserType> = [
  {
    title: "Tên người dùng",
    dataIndex: "name",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
    render(value) {
      return <p>{value}</p>;
    },
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Ngày bắt đầu sử dụng",
    dataIndex: "startDate",
  },
];

const { getUser } = userApi;

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

const UserManagerment = () => {
  const [users, setUsers] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
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
  const handleCancel = () => {
    setOpen(false);
  };
  const onFinish = async () => {
    await form.validateFields();
    setOpen(false);
  };
  useEffect(() => {
    handleGetUsers();
  }, []);

  const Footer = () => {
    return (
      <Row justify={"end"}>
        <Button htmlType="submit" onClick={onFinish}>
          Lưu
        </Button>
      </Row>
    );
  };

  return (
    <Card>
      <Modal
        title="Tạo người dùng mới"
        open={open}
        onCancel={handleCancel}
        footer={<Footer />}
      >
        <Title level={5}>Thông tin cá nhân</Title>
        <Card>
          <Form onFinish={onFinish} layout="vertical" form={form}>
            <Row justify={"space-between"}>
              <Form.Item
                label="Họ"
                name={"firstName"}
                rules={[
                  {
                    required: true,
                    message: "Please enter first name!",
                  },
                ]}
              >
                <Input placeholder="..." />
              </Form.Item>
              <Form.Item
                label="Tên"
                name={"lastName"}
                rules={[
                  {
                    required: true,
                    message: "Please enter last name!",
                  },
                ]}
              >
                <Input placeholder="..." />
              </Form.Item>
            </Row>
            <Form.Item
              label="Số điện thoại"
              name={"phone"}
              rules={[
                {
                  required: true,
                  message: "Please enter phone!",
                },
              ]}
            >
              <Input placeholder="..." />
            </Form.Item>
            <Row justify={"space-between"}>
              <Form.Item
                label="Mật khẩu"
                name={"password"}
                rules={[
                  {
                    required: true,
                    message: "Please enter password!",
                  },
                ]}
              >
                <Input placeholder="..." />
              </Form.Item>
              <Form.Item
                label="Nhập lại mật khẩu"
                name={"cofirmPasssword"}
                rules={[
                  {
                    required: true,
                    message: "Please enter confirm password!",
                  },
                ]}
              >
                <Input placeholder="..." />
              </Form.Item>
            </Row>
            <Form.Item
              label="Email"
              name={"email"}
              rules={[
                {
                  type: "email",
                  message: "Please enter email format",
                },
                {
                  required: true,
                  message: "Please enter email!",
                },
              ]}
            >
              <Input placeholder="abc@mind.vn" />
            </Form.Item>
            <Form.Item
              label="Address"
              name={"address"}
              rules={[
                {
                  required: true,
                  message: "Please enter address!",
                },
              ]}
            >
              <Input placeholder="..." />
            </Form.Item>
          </Form>
        </Card>
      </Modal>
      <Row justify={"space-between"}>
        <Row align={"middle"}>
          <UserOutlined />
          <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: "bold" }}>
            Danh sách người dùng
          </Text>
        </Row>
        <Row justify={"space-around"} align={"middle"}>
          <Col md={6}>
            <UserOutlined />
          </Col>
          <Col md={6}>
            <Button
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => setOpen(true)}
            />
          </Col>
        </Row>
      </Row>

      <Table
        columns={columns}
        dataSource={users.users}
        pagination={pagination}
        loading={users.loading}
        style={{ marginTop: 10 }}
        size="large"
        bordered
      />
    </Card>
  );
};

export default UserManagerment;

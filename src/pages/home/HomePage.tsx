import "./HomePage.scss";
import { Tabs, Typography } from "antd";
import type { TabsProps } from "antd";
import Table from "./_components/Table";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tổng quan",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Danh sách người dùng",
    children: <Table />,
  },
  {
    key: "3",
    label: "Người dùng thử nghiệm",
    children: "Content of Tab Pane 3",
  },
];

export default function HomePage() {
  const { Text, Title } = Typography;
  return (
    <div className="app">
      <div className="menu">
        <div className="">
          {" "}
          <Title
            style={{
              margin: "0",
              color: "white",
              fontSize: "large",
              fontWeight: "bold",
            }}
          >
            MIND
            <Text
              style={{
                color: "white",
                fontSize: "small",
                fontWeight: "normal",
              }}
            >
              PORTAL
            </Text>
          </Title>
        </div>
      </div>

      <div className="container">
        <div className="title">
          <Title style={{ margin: "0" }} level={5}>
            Quản lý người dùng
          </Title>
        </div>
        <div className="table">
          <Tabs
            defaultActiveKey="1"
            items={items}
            style={{ padding: "0" }}
            centered
          />
        </div>
      </div>
    </div>
  );
}

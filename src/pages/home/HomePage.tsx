import "./HomePage.scss";
import { Tabs, Typography } from "antd";

// import { AppleOutlined } from "@ant-design/icons";
import Table from "./_components/Table";
import { getToken } from "../../lib/storage";
import { redirect } from "react-router-dom";
import Header from "./_components/Header";
import NavbarMobile from "./_components/NavbarMobile";

export function Loader() {
  const isAuth = getToken();
  if (!isAuth) {
    return redirect("/login");
  }
  return null;
}

const items = [
  {
    key: "1",
    label: "Tổng quan",
    children: "Content of Tab Pane 1",
    // icon: <AppleOutlined />,
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
  const { Title } = Typography;
  return (
    <div className="app">
      <Header />
      <NavbarMobile />
      <div className="container">
        <div className="title">
          <Title
            style={{
              margin: "0",
              fontSize: "x-large",
              background: "white",
            }}
            level={5}
          >
            Quản lý người dùng
          </Title>
        </div>
        <div className="table">
          <Tabs
            items={items}
            defaultActiveKey="1"
            style={{ padding: "1rem" }}
            centered
          >
            {items.map((item) => (
              <Tabs.TabPane tab={item.label} key={item.key}>
                {item.label}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}

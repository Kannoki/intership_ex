import "./UserPage.scss";
import { Tabs, Typography } from "antd";
import UserList from "./components/UserList";
import { getToken } from "../../lib/storage";
import { redirect } from "react-router-dom";
import { useState } from "react";

export function Loader() {
  const isAuth = getToken();
  if (!isAuth) {
    return redirect("/login");
  }
  return null;
}

const items = [
  {
    key: "Tổng quan",
    label: "Tổng quan",
    // children: "Content of Tab Pane 1",
    // icon: <AppleOutlined />,
  },
  {
    key: "Danh sách người dùng",
    label: "Danh sách người dùng",
    // children: <Table />,
  },
  {
    key: "Người dùng thử nghiệm",
    label: "Người dùng thử nghiệm",
    // children: "Content of Tab Pane 3",
  },
];

const { Title } = Typography;

export default function UserPage() {
  const [activeTab, setActiveTab] = useState("1");

  function renderBody() {
    switch (activeTab) {
      case "Tổng quan":
        return <h1>Tổng quan</h1>;
      case "Danh sách người dùng":
        return <UserList />;
      default:
        return <h1>Chưa triển khai</h1>;
    }
  }

  return (
    <>
      {" "}
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
        <Tabs
          items={items}
          activeKey={activeTab}
          onChange={setActiveTab}
          style={{ padding: "1rem" }}
        />
      </div>
      {renderBody()}
    </>
  );
}

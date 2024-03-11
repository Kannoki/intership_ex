import {
  BellOutlined,
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown, Typography } from "antd";
import "./Header.scss";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/login">
        login
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
];
export default function Navbar() {
  const { Text, Title } = Typography;
  return (
    <div className="menu">
      <div className="logo">
        <Title
          style={{
            width: "max-content",
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

      <div className="nav">
        <Button type="link" icon={<HomeOutlined />} href="/" />
        <Button type="link" icon={<TeamOutlined />} href="/user" />
        <Button type="link" icon={<WifiOutlined />} href="" />
        <Button type="link" icon={<SettingOutlined />} href="" />
      </div>
      <div className="">
        <Badge count={0}>
          <BellOutlined style={{ color: "white" }} />
        </Badge>
        <Dropdown menu={{ items }} placement="bottomRight">
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
            }}
            icon={<UserOutlined />}
          />
        </Dropdown>
        <Text></Text>
      </div>
    </div>
  );
}

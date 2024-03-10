import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import "./Header.scss";

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
        <Button type="link" icon={<HomeOutlined />} href="" />
        <Button type="link" icon={<UserOutlined />} href="" />
        <Button type="link" icon={<HomeOutlined />} href="" />
        <Button type="link" icon={<HomeOutlined />} href="" />
      </div>
      <div></div>
    </div>
  );
}

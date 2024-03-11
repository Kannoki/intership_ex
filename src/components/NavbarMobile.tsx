import {
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import "./NavbarMobile.scss";

export default function NavbarMobile() {
  return (
    <div className="containernav">
      <Button type="link" icon={<HomeOutlined />} href="" />
      <Button type="link" icon={<TeamOutlined />} href="/user" />
      <Button type="link" icon={<WifiOutlined />} />
      <Button type="link" icon={<SettingOutlined />} />
    </div>
  );
}

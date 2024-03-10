import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./NavbarMobile.scss";

export default function NavbarMobile() {
  return (
    <div className="containernav">
      <Button type="link" icon={<HomeOutlined />} href="" />
      <Button type="link" icon={<UserOutlined />} />
      <Button type="link" icon={<HomeOutlined />} />
      <Button type="link" icon={<HomeOutlined />} />
    </div>
  );
}

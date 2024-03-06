import React from "react";
import "./LoginPage.scss";
import { Input } from "antd";

export default function LoginPage() {
  return (
    <div className="bgr">
      <div className="form-card">
        <p>MIND PORTAL</p>
        <Input className="input-login" placeholder="Username" />
        <Input className="input-login" placeholder="Password" />
      </div>
    </div>
  );
}

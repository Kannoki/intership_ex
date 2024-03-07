import React from "react";
import "./LoginPage.scss";
import { Button, Checkbox, Form, type FormProps, Input, Tag } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function LoginPage() {
  return (
    <div className="bgr">
      <div className="form-card">
        <p className="logo">
          <span> MIND</span>PORTAL
        </p>

        <Form
          name="basic"
          labelCol={{}}
          wrapperCol={{}}
          style={{}}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Input
            className="input-login"
            placeholder="Username"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #fff",
            }}
          />

          <Input
            className="input-login"
            placeholder="Password"
            type="password"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #fff",
            }}
          />

          <Button className="btn-login" type="primary" block>
            Login
          </Button>
        </Form>
        <Tag
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
            color: "white",
            fontSize: "x-small",
            textAlign: "center",
          }}
        >
          Already have account?
          <a className="tag-link" href="#">
            Login here
          </a>
        </Tag>
      </div>
    </div>
  );
}

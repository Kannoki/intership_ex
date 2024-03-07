import React from "react";
import "./LoginPage.scss";

import { Button, Form, type FormProps, Input, Tag } from "antd";
import { login } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
type FieldType = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = async ({
    username,
    password,
  }) => {
    try {
      const res = await login(username, password);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.access_token);
        navigate("/Home");
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    } catch (err) {
      console.error(err);
    }
    console.log("Success:");
  };

  return (
    <>
      <div className="bgr">
        <div className="form-card">
          <p className="logo">
            <span> MIND</span>PORTAL
          </p>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
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
    </>
  );
}

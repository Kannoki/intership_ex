import React from "react";
import "./LoginPage.scss";

import { Button, Form, type FormProps, Input, Tag, Typography } from "antd";
import { login } from "../../apis/auth";
import { redirect, useNavigate } from "react-router-dom";
import { getToken, setToken } from "../../lib/storage";

type FieldType = {
  username: string;
  password: string;
};

export function Loader() {
  const isAuth = getToken();
  if (isAuth) {
    return redirect("/");
  }
  return null;
}
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
        setToken(res.data.access_token);
        navigate("/");
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    } catch (err) {
      console.error("this", err);
    }
  };
  const { Text, Title } = Typography;
  return (
    <>
      <div className="bgr">
        <div className="form-card">
          <div className="logo">
            {" "}
            <Title>
              MIND<Text>PORTAL</Text>
            </Title>
          </div>

          <Form
            style={{ margin: "2rem 0 2rem 0" }}
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
              <Input
                placeholder="Username"
                style={{ backgroundColor: "transparent", color: "white" }}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                style={{ backgroundColor: "transparent", color: "white" }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Title
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
              Register
            </a>
          </Title>
        </div>
      </div>
    </>
  );
}

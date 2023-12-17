import React from "react";
import Logo from "../../assets/img/login.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, ConfigProvider, Typography } from "antd";
import { FormButton, NotButton } from "../FormButton";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="appBg auth">
      <Form
        name="normal_login"
        className="login-form card"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <img
          src={Logo}
          style={{
            width: "20vh",
          }}
        />
        <Typography.Title>Welcome Back!</Typography.Title>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <FormButton formButton="Sign In" />
        </Form.Item>
      </Form>

      <NotButton />
    </div>
  );
};
export default Login;

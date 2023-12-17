import React from "react";
import Logo from "../../assets/img/register.png";
import { LockOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Form, Input, ConfigProvider, Typography } from "antd";
import { FormButton } from "../FormButton";

const Register = () => {
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
        <img src={Logo} style={{ width: "38vh" }} />
        <Typography.Title style={{ marginTop: "0.5rem" }}>
          Welcome!
        </Typography.Title>
        <Form.Item
          name="namw"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>
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
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your Phone Number!",
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Phone Number"
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
          <FormButton formButton="Sign Up" />
        </Form.Item>
      </Form>

      <p className="not-text">Not Register yet?</p>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#A6CF98",
          },
        }}
      >
        <Button
          // type="primary"
          htmlType="submit"
          className="not-button"
          href="./login"
        >
          Sign In
        </Button>
      </ConfigProvider>
    </div>
  );
};
export default Register;

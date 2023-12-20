import Logo from "../assets/img/register.png";
import { LockOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Form, Input, ConfigProvider, Typography, message } from "antd";
import { FormButton } from "../components/FormButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    message.open({
      type: "loading",
      content: "Wait a second",
    });
    await axios
      .post(`https://bolang-express.netlify.app/.netlify/functions/api/user/register`, values)
      .then((response) => {
        message.destroy();
        message.open({
          type: "success",
          content: response.data.message,
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch(() => {
        message.destroy();
        message.open({
          type: "error",
          content: "Gagal membuat akun pengguna",
        });
      });
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
        <Typography.Title style={{ marginTop: "0.5rem" }}>Welcome!</Typography.Title>
        <Form.Item
          name="nama"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
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
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="noPhone"
          rules={[
            {
              required: true,
              message: "Please input your Phone Number!",
            },
          ]}
        >
          <Input type="number" prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone Number" />
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
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
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

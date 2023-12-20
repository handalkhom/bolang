import Logo from "../assets/img/login.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Typography, message } from "antd";
import { FormButton, NotButton } from "../components/FormButton";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    message.open({
      type: "loading",
      content: "Login in  .... ",
    });
    await axios
      .post(`https://bolang-express.netlify.app/.netlify/functions/api/user/login`, values)
      .then((response) => {
        Cookies.set("accessToken", response.data.token);
        Cookies.set("nama", response.data.user[0].nama);
        message.destroy();
        message.open({
          type: "success",
          content: response.data.message,
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      })
      .catch((e) => {
        message.destroy();
        message.open({
          type: "error",
          content: e.response.data.message,
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
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
          <FormButton formButton="Sign In" />
        </Form.Item>
      </Form>

      <NotButton />
    </div>
  );
};
export default Login;

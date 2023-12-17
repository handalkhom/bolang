import React from "react";
import Logo from "../../assets/img/logo.png";
import { Button, ConfigProvider, Typography } from "antd";

const Welcome = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="appBg auth">
      <img src={Logo} style={{ width: "60vh" }} />
      <Typography>
        Selamat Datang di Bolang. Platform booking lapangan dengan cepat dan
        mudah. Kami menyediakan beberapa lapangan olahraga seperti mini soccer,
        basket, badminton,futsal, dan volly.
      </Typography>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#A6CF98",
          },
        }}
      >
        <Button
          href="./"
          size="large"
          style={{ margin: "12rem 0", fontWeight: 600 }}
        >
          Get Started
        </Button>
      </ConfigProvider>
      <Typography>Kelompok 6</Typography>
    </div>
  );
};
export default Welcome;

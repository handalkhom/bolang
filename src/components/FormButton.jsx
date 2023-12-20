/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, ConfigProvider } from "antd";

const FormButton = (props) => {
  //   const onFinish = (values) => {
  //     console.log("Received values of form: ", values);
  //   };
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#A6CF98",
        },
      }}
    >
      <Button type="primary" htmlType="submit" className="form-button">
        {props.formButton}
      </Button>
    </ConfigProvider>
  );
};

const NotButton = (props) => {
  return (
    <>
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
          href="./register"
        >
          Sign Up
        </Button>
      </ConfigProvider>
    </>
  );
};

export { FormButton, NotButton };

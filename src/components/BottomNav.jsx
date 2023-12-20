import { Button, Space } from "antd";
import { ContainerOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";

const BottomNav = () => {
  return (
    <Space className="bottom-nav">
      <Button href="/dashboard" type="text" icon={<HomeOutlined />} size="large"></Button>
      <Button href="/history" type="text" icon={<ContainerOutlined />} size="large"></Button>
      <Button href="/profile" type="text" icon={<UserOutlined />} size="large"></Button>
    </Space>
  );
};

export default BottomNav;

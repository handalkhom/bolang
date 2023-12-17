import React from "react";
import BottomNav from "../BottomNav";
import {
  Button,
  Input,
  Form,
  DatePicker,
  TimePicker,
  ConfigProvider,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const BookConfirmation = () => {
  return (
    <div className="appBg">
      <header>
        <Button href="/book" icon={<ArrowLeftOutlined />} size="large" />
        <h1 className="title konfirmasi">Konfirmasi Booking</h1>
      </header>
      <div className="konfirmasi-container">
        <Form layout="vertical" className="konfirmasi-form">
          <Form.Item label="Nama">
            <Input
              className="konfirmasi-item"
              placeholder="Nama"
              style={{
                width: "90%",
              }}
            />
          </Form.Item>
          <Form.Item label="Tanggal Booking">
            <DatePicker
              style={{
                width: "90%",
              }}
              className="konfirmasi-item"
            />
          </Form.Item>
          <Form.Item label="Lapangan">
            <Input
              className="konfirmasi-item"
              placeholder="Lapangan A"
              style={{
                width: "90%",
              }}
            />
          </Form.Item>
          <Form.Item label="Jam Mulai-Selesai">
            <TimePicker
              style={{
                width: "90%",
              }}
              className="konfirmasi-item"
            />
          </Form.Item>
          <Form.Item label="Total Harga">
            <Input
              className="konfirmasi-item"
              placeholder="Rp2.000.000"
              style={{
                width: "90%",
              }}
            />
          </Form.Item>
          <Form.Item>
            <ConfigProvider
              theme={{
                token: {
                  // Seed Token
                  colorPrimary: "#08BE05",

                  // Alias Token
                  colorBgContainer: "#08BE05",
                },
              }}
            >
              <Button type="primary" htmlType="submit" style={{ width: "90%" }}>
                Submit
              </Button>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </div>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
};

export default BookConfirmation;

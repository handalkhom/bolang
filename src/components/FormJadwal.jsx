import React from "react";
import {
  DatePicker,
  Form,
  Select,
  TimePicker,
  Button,
  ConfigProvider,
} from "antd";

const FormJadwal = () => {
  return (
    <div className="form-container">
      <strong>Pilih Jadwal</strong>
      <Form layout="vertical" className="pick-form">
        <Form.Item label="Pilih Tanggal">
          <DatePicker
            style={{
              width: "80%",
            }}
          />
        </Form.Item>
        <Form.Item label="Jam Mulai">
          <TimePicker
            style={{
              width: "80%",
            }}
          />
        </Form.Item>
        <Form.Item label="Jam Selesai">
          <TimePicker
            style={{
              width: "80%",
            }}
          />
        </Form.Item>
        <Form.Item label="Lapangan">
          <Select
            style={{
              width: "80%",
            }}
          >
            <Select.Option value="lapa">Lapangan A</Select.Option>
            <Select.Option value="lapb">Lapangan B</Select.Option>
          </Select>
        </Form.Item>
      </Form>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#08BE05",
          },
        }}
      >
        <Button
          href="/confirm"
          type="primary"
          htmlType="submit"
          style={{ width: "90%" }}
        >
          Submit
        </Button>
      </ConfigProvider>
    </div>
  );
};
// <a href="https://www.freepik.com/free-vector/balls-sports-set_9649035.htm#query=ball%20icon&position=5&from_view=search&track=ais&uuid=be35c0f9-f7bc-4064-996d-1ef46c53e4ad">Image by pch.vector</a> on Freepik
export default FormJadwal;

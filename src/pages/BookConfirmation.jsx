/* eslint-disable react-hooks/exhaustive-deps */
import BottomNav from "../components/BottomNav";
import { Button, Input, Form, ConfigProvider, Skeleton, notification } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BookConfirmation = () => {
  const { kategoriLapangan, idOrder } = useParams();
  const [detailOrder, setDetailOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get(`https://bolang-express.netlify.app/.netlify/functions/api/order/${idOrder}`).then((response) => {
        setDetailOrder(response.data.order[0]);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleConfirmOrder = async () => {
    try {
      const response = await axios.put(`https://bolang-express.netlify.app/.netlify/functions/api/order`, {
        idOrder: idOrder,
      });
      console.log(response);
      notification.success({
        message: "Success",
        description: "Booking Lapangan Berhasil",
        duration: 2,
        placement: "top",
        closeIcon: false,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="appBg">
      {detailOrder === null ? (
        <Skeleton />
      ) : (
        <>
          <header>
            <Button href={`/dashboard/${kategoriLapangan}`} icon={<ArrowLeftOutlined />} size="large" />
            <h1 className="title konfirmasi">Konfirmasi Booking</h1>
          </header>
          <div className="konfirmasi-container">
            <Form layout="vertical" className="konfirmasi-form" onFinish={handleConfirmOrder}>
              <Form.Item label="Nama">
                <Input
                  disabled
                  value={detailOrder.nama}
                  className="konfirmasi-item"
                  style={{
                    width: "90%",
                  }}
                />
              </Form.Item>
              <Form.Item label="Tanggal Booking">
                <Input
                  disabled
                  value={detailOrder.tanggal.substring(0, 10)}
                  className="konfirmasi-item"
                  style={{
                    width: "90%",
                  }}
                />
                {/* <DatePicker
              style={{
                width: "90%",
              }}
              className="konfirmasi-item"
            /> */}
              </Form.Item>
              <Form.Item label="Lapangan">
                <Input
                  disabled
                  value={detailOrder.kategori_lapangan + " (" + detailOrder.kode_lapangan + ")"}
                  className="konfirmasi-item"
                  style={{
                    width: "90%",
                  }}
                />
              </Form.Item>
              <Form.Item label="Jam Mulai-Selesai">
                {/* <TimePicker
              style={{
                width: "90%",
              }}
              className="konfirmasi-item"
            /> */}
                <Input
                  disabled
                  value={detailOrder.jam_mulai + " - " + detailOrder.jam_selesai}
                  className="konfirmasi-item"
                  style={{
                    width: "90%",
                  }}
                />
              </Form.Item>
              <Form.Item label="Total Harga">
                <Input
                  disabled
                  value={"Rp. " + detailOrder.total_harga.toLocaleString("de-DE")}
                  className="konfirmasi-item"
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
        </>
      )}
    </div>
  );
};

export default BookConfirmation;

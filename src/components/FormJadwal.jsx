/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { DatePicker, Form, Select, Button, ConfigProvider } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const FormJadwal = ({ kategoriLapangan }) => {
  const [lapanganByKategori, setLapanganByKategori] = useState([]);
  const [selectLapangan, setSelectLapangan] = useState();
  const [jamMulai, setJamMulai] = useState();
  const [jamSelesai, setJamSelesai] = useState();
  const navigate = useNavigate();

  const getLapanganByKategori = async () => {
    const response = await axios
      .get(`https://bolang-express.netlify.app/.netlify/functions/api/lapangan/${kategoriLapangan}`, {
        Headers: {
          "access-token": Cookies.get("accessToken"),
        },
      })
      .catch(() => {
        getLapanganByKategori();
      });
    console.log(response.data.data);
    setLapanganByKategori(response.data.data);
  };

  useEffect(() => {
    getLapanganByKategori();
  }, []);

  const handleGetJadwal = async (tanggal) => {
    try {
      console.log(selectLapangan + tanggal);
      const response = await axios.get(`https://bolang-express.netlify.app/.netlify/functions/api/jadwal/${tanggal}/${selectLapangan}`);
      const jamMulaiArray = response.data.result.map((e) => e.jam_mulai);
      const jamSelesaiArray = response.data.result.map((e) => e.jam_selesai);
      console.log(response.data.result);
      setJamMulai(jamMulaiArray);
      setJamSelesai(jamSelesaiArray);
    } catch (error) {
      console.error("Error fetching jadwal data:", error);
    }
  };

  const handleSubmitForm = async (values) => {
    const requestBody = parseValues(values);

    try {
      const response = await axios.post(`https://bolang-express.netlify.app/.netlify/functions/api/order`, requestBody);

      navigate(`/dashboard/${kategoriLapangan}/booking/${response.data.id_order}`);
    } catch (error) {
      console.log(error);
    }
  };

  const parseValues = (e) => {
    const tanggal = new Date(e.tanggal);
    const parseTanggal = tanggal.getFullYear() + "-" + (tanggal.getMonth() + 1) + "-" + tanggal.getDate();

    const values = {
      token: Cookies.get("accessToken"),
      idLapangan: e.idLapangan,
      tanggal: parseTanggal,
      jamMulai: e.jamMulai,
      jamSelesai: e.jamSelesai,
    };
    return values;
  };

  return (
    <div className="form-container">
      <strong>Pilih Jadwal</strong>
      <Form layout="vertical" className="pick-form" onFinish={handleSubmitForm}>
        <Form.Item label="Lapangan" name="idLapangan">
          <Select
            style={{
              width: "80%",
            }}
            onSelect={(e) => setSelectLapangan(e)}
          >
            {lapanganByKategori.map((lapangan) => {
              return (
                <Select.Option value={lapangan.id_lapangan} key={lapangan.id_lapangan}>
                  {lapangan.kategori_lapangan} {lapangan.kode_lapangan}
                </Select.Option>
              );
            })}

            {/* <Select.Option value="lapb">Lapangan B</Select.Option> */}
          </Select>
        </Form.Item>
        <Form.Item label="Pilih Tanggal" name="tanggal">
          <DatePicker
            style={{
              width: "80%",
            }}
            onSelect={(e) => handleGetJadwal(e.year() + "-" + parseInt(e.month() + 1) + "-" + e.date())}
          />
        </Form.Item>
        {jamMulai !== undefined && jamSelesai !== undefined && (
          <>
            <Form.Item label="Jam Mulai" name="jamMulai">
              <Select
                style={{
                  width: "80%",
                }}
                // onSelect={(e) => console.log(e)}
              >
                {jamMulai.map((e, index) => {
                  return (
                    <Select.Option value={e < 10 ? `0${e}:00:00` : `${e}:00:00`} key={index}>
                      {e < 10 ? `0${e}:00:00` : `${e}:00:00`}
                    </Select.Option>
                  );
                })}
              </Select>
              {/* <TimePicker
                style={{
                  width: "80%",
                }}
              /> */}
            </Form.Item>
            <Form.Item label="Jam Selesai" name="jamSelesai">
              {/* <TimePicker
                style={{
                  width: "80%",
                }}
              /> */}
              <Select
                style={{
                  width: "80%",
                }}
                // onSelect={(e) => console.log(e)}
              >
                {jamSelesai.map((e, index) => {
                  return (
                    <Select.Option value={e < 10 ? `0${e}:00:00` : `${e}:00:00`} key={index}>
                      {e < 10 ? `0${e}:00:00` : `${e}:00:00`}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </>
        )}
        <Form.Item>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#08BE05",
              },
            }}
          >
            {jamMulai !== undefined && jamSelesai !== undefined && (
              <Button type="primary" htmlType="submit" style={{ width: "90%" }}>
                Submit
              </Button>
            )}
          </ConfigProvider>
        </Form.Item>
      </Form>
    </div>
  );
};
// <a href="https://www.freepik.com/free-vector/balls-sports-set_9649035.htm#query=ball%20icon&position=5&from_view=search&track=ais&uuid=be35c0f9-f7bc-4064-996d-1ef46c53e4ad">Image by pch.vector</a> on Freepik
export default FormJadwal;

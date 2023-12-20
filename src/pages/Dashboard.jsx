/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button } from "antd";
import BottomNav from "../components/BottomNav";
import bola from "../assets/img/bola.png";
import basket from "../assets/img/basket.png";
import badmin from "../assets/img/bultang.png";
import voli from "../assets/img/voli.png";
import gor from "../assets/img/gor.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [kategoriLapangan, setKategoriLapangan] = useState([]);
  const navigate = useNavigate();

  const getKategoriLapangan = async () => {
    const response = await axios.get(`https://bolang-express.netlify.app/.netlify/functions/api/lapangan`).catch(() => {
      getKategoriLapangan();
    });
    setKategoriLapangan(response.data.data);
  };

  useEffect(() => {
    getKategoriLapangan();
  }, []);

  const handleSelect = (e) => {
    console.log(e);

    navigate(`/dashboard/${e.kategori_lapangan.toLowerCase()}`);
  };

  return (
    <>
      <div className="appBg">
        <header className="dashboard-header">
          <div className="text-img">
            <h1>Selamat Datang</h1>
            <p>Apa yang ingin anda booking?</p>
          </div>
          <img className="header-img" src={gor} alt="" />
        </header>
        <div className="container">
          {kategoriLapangan.map((lapangan, index) => {
            const harga = lapangan.harga_jam.toLocaleString("de-DE");
            let image;
            switch (lapangan.kategori_lapangan) {
              case "Badminton":
                image = badmin;
                break;

              case "Basket":
                image = basket;
                break;

              case "Volly":
                image = voli;
                break;

              default:
                image = bola;
                break;
            }
            return (
              <Button className="opsi" onClick={() => handleSelect(kategoriLapangan[index])} key={index}>
                <img className="opsi-image" src={image} />
                <p>
                  <strong>{lapangan.kategori_lapangan}</strong>
                </p>
                <p>
                  <sub>{harga}/jam</sub>
                </p>
              </Button>
            );
          })}
          {/* <Button className="opsi" href="/book">
            <img className="opsi-image" src={bola} />
            <p>
              <strong>FUTSAL</strong>
            </p>
            <p>
              <sub>110.000/jam</sub>
            </p>
          </Button>
          <Button className="opsi" href="/book">
            <img className="opsi-image" src={bola} />
            <p>
              <strong>MINI SOCCER</strong>
            </p>
            <p>
              <sub>1.000.000/jam</sub>
            </p>
          </Button>
          <Button className="opsi" href="/book">
            <img className="opsi-image" src={basket} />
            <p>
              <strong>BASKET</strong>
            </p>
            <p>
              <sub>110.000/jam</sub>
            </p>
          </Button>
          <Button className="opsi" href="/book">
            <img className="opsi-image" src={voli} />
            <p>
              <strong>VOLLEY</strong>
            </p>
            <p>
              <sub>80.000/jam</sub>
            </p>
          </Button>
          <Button className="opsi" href="/book">
            <img className="opsi-image" src={badmin} />
            <p>
              <strong>BADMINTON</strong>
            </p>
            <p>
              <sub>50.000/jam</sub>
            </p>
          </Button> */}
        </div>
        <footer>
          <BottomNav />
        </footer>
      </div>
    </>
  );
};
// <a href="https://www.freepik.com/free-vector/balls-sports-set_9649035.htm#query=ball%20icon&position=5&from_view=search&track=ais&uuid=be35c0f9-f7bc-4064-996d-1ef46c53e4ad">Image by pch.vector</a> on Freepik
export default Dashboard;

import React from "react";
import { Button } from "antd";
import BottomNav from "../BottomNav";
import bola from "../../assets/img/bola.png";
import basket from "../../assets/img/basket.png";
import badmin from "../../assets/img/bultang.png";
import voli from "../../assets/img/voli.png";
import gor from "../../assets/img/gor.jpg";

const Dashboard = () => {
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
          <Button className="opsi" href="/book">
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
          </Button>
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

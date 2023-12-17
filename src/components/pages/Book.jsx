import React from "react";
import BottomNav from "../BottomNav";
import gor from "../../assets/img/gor.jpg";
import FormJadwal from "../FormJadwal";
import { Button, ConfigProvider } from "antd";

const Book = () => {
  return (
    <div className="appBg">
      <header>
        <h1 className="title">Booking Lapangan</h1>
        <img className="header-img" src={gor} alt="" />
      </header>
      <h2>MINI SOCCER</h2>
      <FormJadwal />
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
};

export default Book;

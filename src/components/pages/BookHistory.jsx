import React from "react";
import BottomNav from "../BottomNav";

const BookHistory = () => {
  return (
    <div className="appBg">
      <header>
        <h1 className="title">Riwayat Booking</h1>
      </header>
      <div className="container list">
        <div className="history-list">
          <p className="date">17-08-23</p>
          <h4>Soccer Mini 07:00 - 08:00</h4>
          <p className="price">Rp1.000.000</p>
        </div>
        <div className="history-list">
          <p className="date">17-08-23</p>
          <h4>Soccer Mini 07:00 - 08:00</h4>
          <p className="price">Rp1.000.000</p>
        </div>
      </div>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
};

export default BookHistory;

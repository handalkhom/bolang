import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import axios from "axios";
import Cookies from "js-cookie";

const BookHistory = () => {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    try {
      axios.get(`https://bolang-express.netlify.app/.netlify/functions/api/order/riwayat/${Cookies.get("accessToken")}`).then((response) => {
        setBookData(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="appBg">
      {bookData !== undefined && (
        <>
          <header>
            <h1 className="title">Riwayat Booking</h1>
          </header>
          <div className="container list">
            {bookData.map((e, index) => {
              return (
                <div className="history-list" key={index}>
                  <p className="date">{e.tanggal}</p>
                  <h4>{e.kategori_lapangan + " " + e.jam_mulai.substring(0, 5) + " - " + e.jam_selesai.substring(0, 5)}</h4>
                  <p className="price">{"Rp." + e.total_harga.toLocaleString("de-DE")}</p>
                </div>
              );
            })}
            {/* <div className="history-list">
          <p className="date">17-08-23</p>
          <h4>Soccer Mini 07:00 - 08:00</h4>
          <p className="price">Rp1.000.000</p>
        </div> */}
          </div>
          <footer>
            <BottomNav />
          </footer>
        </>
      )}
    </div>
  );
};

export default BookHistory;

import gor from "../assets/img/gor.jpg";
import FormJadwal from "../components/FormJadwal";
import { useParams } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const Book = () => {
  const { kategoriLapangan } = useParams();
  return (
    <div className="appBg">
      <header>
        <h1 className="title">Booking Lapangan</h1>
        <img className="header-img" src={gor} alt="" />
      </header>
      <h2>{kategoriLapangan.toUpperCase()}</h2>
      <FormJadwal kategoriLapangan={kategoriLapangan} />
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
};

export default Book;

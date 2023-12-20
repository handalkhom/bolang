import Logo from "../assets/img/logo(white).png";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/dashboard");
  }, 3000);
  return (
    <div className="appBg auth">
      <img src={Logo} style={{ width: "60vh", position: "absolute", top: 0 }} />
      <div style={{ marginTop: 100 }}>
        <Typography>Selamat Datang di Bolang. Platform booking lapangan dengan cepat dan mudah. Kami menyediakan beberapa lapangan olahraga seperti mini soccer, basket, badminton, futsal, dan volly.</Typography>
        <Typography>Kelompok 6</Typography>
      </div>
    </div>
  );
};
export default Welcome;

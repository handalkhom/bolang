import profile_icon from "../assets/img/profile.png";
import { Button, Skeleton } from "antd";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get(`https://bolang-express.netlify.app/.netlify/functions/api/user/profile/${Cookies.get("accessToken")}`);
      setDataUser(response.data);
      console.log(response.data);
    } catch (error) {
      window.location.reload();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSignOut = () => {
    Cookies.remove("accessToken");
    Cookies.remove("nama");
    navigate("/login");
  };

  return (
    <>
      {dataUser === null ? (
        <Skeleton paragraph />
      ) : (
        <div className="appBg">
          <header>
            <h1 className="title">Profil Pengguna</h1>
          </header>
          <div className="container profile">
            <div className="profile-down">
              <img src={profile_icon} alt="" />
              <div className="profile-title">{dataUser[0].nama}</div>
              <div className="profile-description">{dataUser[0].role}</div>
            </div>
          </div>
          <Button danger style={{ fontWeight: 600 }} onClick={handleSignOut}>
            Sign Out
          </Button>
          <footer>
            <BottomNav />
          </footer>
        </div>
      )}
    </>
  );
};

export default UserProfile;

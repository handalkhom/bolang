import React from "react";
import BottomNav from "../BottomNav";
import profile_icon from "../../assets/img/profile.png";
import { Button } from "antd";

const UserProfile = () => {
  return (
    <div className="appBg">
      <header>
        <h1 className="title">Profil Pengguna</h1>
      </header>
      <div className="container profile">
        <div className="profile-down">
          <img src={profile_icon} alt="" />
          <div className="profile-title">Nama User</div>
          <div className="profile-description">Deskripsi</div>
        </div>
      </div>
      <Button href="./" danger style={{ fontWeight: 600 }}>
        Sign Out
      </Button>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
};

export default UserProfile;

import React, { useState, useEffect } from "react";
import ProfileImg from "../images/profile__img.png";
import ShareMobile from "../images/Avatar share button1.svg";
import ShareDesktop from "../images/Avatar share button.svg";
import CameraIcon from "../images/camera-01.svg";

const Profile = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <section id="Profile">
      <div className="profile">
        <div className="img">
          <img src={ProfileImg} id="profile_img" alt="profile Pic" />
          <div className="img-overlay">
            <img src={CameraIcon} alt="" />
          </div>
        </div>

        <h1 id="twitter">SAwanle</h1>
        <h2 id="slack">ASOCODE</h2>
      </div>
      <div className="share">
        {size < 760 ? (
          <img src={ShareMobile} alt="share icon" />
        ) : (
          <img src={ShareDesktop} alt="share icon" />
        )}
      </div>
    </section>
  );
};

export default Profile;

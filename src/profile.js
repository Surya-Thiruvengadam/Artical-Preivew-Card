import React from "react";
import avatar from "./images/avatar-michelle.jpg";
import Share from "./Share";

function Profile() {
  return (
    <div className="profile-container">
      <div>
        <img src={avatar} alt="avatar" />
      </div>

      <div className="profilename">
        <span> Michelle Appleton</span>
        <br />
        <span> 28 Jun 2020</span>
      </div>
      <Share />
    </div>
  );
}

export default Profile;

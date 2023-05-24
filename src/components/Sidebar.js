import React from "react";


const Sidebar = ({ image, name, email, location }) => {
  return (
    <aside className="sidebar">
      <div className="profile-image">
        <img src={image} alt="Profile" width={100} height={100}/>
      </div>
      <h2 className="profile-heading">User Profile</h2>
      <p className="profile-detail">Name: {name}</p>
      <p className="profile-detail">Email: {email}</p>
      <p className="profile-detail">Location: {location}</p>
    </aside>
  );
};

export default Sidebar;

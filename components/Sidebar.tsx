import React from "react";

interface Props {
  image: string;
  name: string;
  email: string;
  location: string;
}

const Sidebar: React.FC<Props> = ({ image, name, email, location }) => {
  return (
    <aside className="sidebar">
      <div className="profile-image">
        <img src={image} alt="Profile" />
      </div>
      <h2 className="profile-heading">User Profile</h2>
      <p className="profile-detail">Name: {name}</p>
      <p className="profile-detail">Email: {email}</p>
      <p className="profile-detail">Location: {location}</p>
    </aside>
  );
};

export default Sidebar;

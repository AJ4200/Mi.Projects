import React from "react";
import Image from "next/image"
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
        <Image src={image} alt="Profile" width={100} height={100}/>
      </div>
      <h2 className="profile-heading">User Profile</h2>
      <p className="profile-detail">Name: {name}</p>
      <p className="profile-detail">Email: {email}</p>
      <p className="profile-detail">Location: {location}</p>
    </aside>
  );
};

export default Sidebar;
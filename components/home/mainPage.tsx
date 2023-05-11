import React from "react";
import TabButton from "../buttons/tabbutton";

function MainPage() {
  return (
    <div className="container">
      <div className="sidebar">
        <h2 className="profile-heading">User Profile</h2>
        <p className="profile-detail">Name: John Doe</p>
        <p className="profile-detail">Email: johndoe@example.com</p>
        <p className="profile-detail">Location: San Francisco, CA</p>
      </div>
      <div className="main-content">
        <div className="tab-bar">
          <TabButton label={"Web Development"} />
          <TabButton label={"Imagirey"} />
          <TabButton label={"Music"} />
        </div>
        <div className="tab-content">
          <div className="project">
            <h3 className="project-title">Project Title</h3>
            <p className="project-description">
              Description of project goes here.
            </p>
          </div>
          <div className="project">
            <h3 className="project-title">Project Title</h3>
            <p className="project-description">
              Description of project goes here.
            </p>
          </div>
          <div className="project">
            <h3 className="project-title">Project Title</h3>
            <p className="project-description">
              Description of project goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

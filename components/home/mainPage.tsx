import React from "react";
import TabButton from "../buttons/tabbutton";

function MainPage() {
  const tabButtons = [
    { label: "Web Development", id: "webdev" },
    { label: "Imagirey", id: "imagirey" },
    { label: "Music", id: "music" },
  ];

  const projects = [
    {
      title: "Project Title",
      description: "Description of project goes here.",
      imageUrl: "https://source.unsplash.com/640x480/?landscape",
      id: 1,
    },
    {
      title: "Project Title",
      description: "Description of project goes here.",
      imageUrl: "https://source.unsplash.com/640x480/?landscape",
      id: 2,
    },
    {
      title: "Project Title",
      description: "Description of project goes here.",
      imageUrl: "https://source.unsplash.com/640x480/?landscape",
      id: 3,
    },
  ];

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile-image">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>  
        <h2 className="profile-heading">User Profile</h2>
        <p className="profile-detail">Name: John Doe</p>
        <p className="profile-detail">Email: johndoe@example.com</p>
        <p className="profile-detail">Location: San Francisco, CA</p>
      </aside>
      <div className="main-content">
        <nav className="tab-bar">
          {tabButtons.map((button) => (
            <TabButton key={button.id} label={button.label} />
          ))}
        </nav>
        <section className="tab-content">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-image">
                <picture>
                  <source type="image/webp" srcSet={`${project.imageUrl}.webp`} />
                  <source type="image/jpeg" srcSet={`${project.imageUrl}.jpg`} />
                  <img src={`${project.imageUrl}.jpg`} alt={project.title} />
                </picture>
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default MainPage;

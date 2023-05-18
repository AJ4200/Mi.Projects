import React from "react";
import TabButton from "../utils/buttons/tabbutton";
import Sidebar from "../../components/Sidebar";
import ProjectCard from "../../components/utils/ProjectCard";


function MainPage() {

  const tabButtons = [
    { label: "Web Development", id: "webdev" },
    { label: "Imagirey", id: "imagirey" },
    { label: "Music", id: "music" },
  ];

  let projects = [];

  for (let i = 0; i <= 11; i++) {
    projects[i] = {
      title: "Project Title" + i,
      description: "Description of project goes here." + i,
      imageUrl: "https://source.unsplash.com/640x480/?landscape",
      id: i,
    };
  }

  return (
    <div className="container">
      <Sidebar
        image="https://via.placeholder.com/150"
        name="John Doe"
        email="johndoe@example.com"
        location="San Francisco, CA"
      />
      <div className="main-content">
        <nav className="tab-bar">
          {tabButtons.map((button) => (
            <TabButton key={button.id} label={button.label} />
          ))}
        </nav>
        <section className="tab-content">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default MainPage;

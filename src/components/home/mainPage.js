import React from "react";
import TabButton from "../utils/buttons/tabbutton";
import Sidebar from "../Sidebar";
import ProjectCard from "../utils/ProjectCard";

const tabButtons = [
  { label: "Web Development", id: "webdev" },
  { label: "Imagirey", id: "imagirey" },
  { label: "Music", id: "music" },
];

const projects = [];

for (let i = 0; i < 5; i++) {
  projects.push({
    title: `Project Title ${i}`,
    description: `Description of project goes here ${i}`,
    imageUrl: `https://via.placeholder.com/300x200?text=Project+${i}`,
    id: i,
  });
}

const MainPage = () => {
  const renderTabButtons = () => {
    return tabButtons.map((button) => (
      <TabButton key={button.id} label={button.label}/>
    ));
  };

  const renderProjects = () => {
    return projects.map((project) => (
      <div key={project.id}>
        <ProjectCard {...project} />
      </div>
    ));
  };

  return (
    <div className="container">
      <Sidebar
        image="/profile.png"
        name="John Doe"
        email="johndoe@example.com"
        location="San Francisco, CA"
      />
      <div className="main-content">
        <nav className="tab-bar">{renderTabButtons()}</nav>
        <section className="tab-content">{renderProjects()}</section>
      </div>
    </div>
  );
};

export default MainPage;

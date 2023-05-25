import React, { useState } from "react";
import TabButton from "../utils/buttons/tabbutton";
import Sidebar from "../utils/Sidebar";
import WebDevProjects from "../home/projects/WebDevProjects";
import ImageryProjects from "../home/projects/ImageryProjects";
import MusicProjects from "../home/projects/MusicProjects";

const tabButtons = [
  { label: "Web Development", id: "webdev" },
  { label: "Imagery", id: "imagery" },
  { label: "Music", id: "music" },
];

const MainPage = () => {
  const [activeTab, setActiveTab] = useState(tabButtons[0].id);

  const renderTabContent = () => {
    switch (activeTab) {
      case "webdev":
        return <WebDevProjects />;
      case "imagery":
        return <ImageryProjects />;
      case "music":
        return <MusicProjects />;
      default:
        return null;
    }
  };

  const renderTabButtons = () => {
    return tabButtons.map((button) => (
      <TabButton
        key={button.id}
        label={button.label}
        onClick={() => setActiveTab(button.id)}
        isActive={activeTab === button.id}
      />
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
        <section className="tab-content">{renderTabContent()}</section>
      </div>
    </div>
  );
};

export default MainPage;

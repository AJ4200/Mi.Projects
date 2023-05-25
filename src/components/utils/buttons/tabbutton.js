import React from "react";

const TabButton = ({ label, onClick, isActive }) => {
  const buttonClasses = isActive ? "tabbutton active" : "tabbutton";

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};

export default TabButton;

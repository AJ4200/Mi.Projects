import React from "react";

// Define the LogoProps interface with a required `logoText` prop of type string and an optional `username` prop of type string.
interface LogoProps {
  logoText?: string;
  username?: string;
}

// Define the Logo component as a React functional component that takes in a `LogoProps` object and returns a React element.
const Logo: React.FC<LogoProps> = ({ logoText = 'Mi.Projects', username }) => {
  // If a `username` prop is provided, append it to the default `logoText` value.
  const text = username ? `Mi.Projects - ${username}` : logoText;

  // Return a button element with the class "logo" and the data-text attribute set to "Awesome".
  return (
    <h1 className="logo" data-text="Awesome">
      {/* Render two spans inside the button: */}
      {/* One with the class "actual-text" and the text inside surrounded by non-breaking spaces */}
      <span className="actual-text">&nbsp;{text}&nbsp;</span>
      {/* And one with the class "hover-text" that is hidden to screen readers and also has the text inside surrounded by non-breaking spaces. */}
      <span className="hover-text" aria-hidden="true">&nbsp;{text}&nbsp;</span>
    </h1>
  );
};

// Export the Logo component as the default export of this module.
export default Logo;

import React from "react";

 const Logo = ({ logoText = 'Mi.Projects', username, socials = [] }) => {
  username = "beta";
  const text = username ? `Mi.Projects - ${username}` : logoText;
   socials = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/"
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      link: "https://twitter.com/"
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/"
    }
  ];
   return (
    <div className="logo-container">
      <h1 className="logo" data-text="Awesome">
        <span className="actual-text">&nbsp;{text}&nbsp;</span>
        <span className="hover-text" aria-hidden="true">&nbsp;{text}&nbsp;</span>
      </h1>
      <div className="social-icons">
        {socials.map((social, index) => (
          <a href={social.link} key={index}>
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};
 export default Logo;
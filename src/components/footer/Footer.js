import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/help">Help</a></li>
        </ul>
      </nav>
      <div class="social-icons">
        <a href="https://www.facebook.com"><i class="fab fa-facebook"></i></a>
        <a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a>
      </div>
      <p>&copy; 2021 Your Company Name. All Rights Reserved.</p>
    </footer>
  );
}
export default Footer;
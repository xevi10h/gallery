import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className=" flowbox-footer">
      <div className="footer-container">
        <p className="footer-content">
          © {new Date().getFullYear()} Flowbox. All rights reserved.
        </p>
        {/* You can add additional footer links, social media icons, or any other content here */}
      </div>
    </footer>
  );
};

export default Footer;

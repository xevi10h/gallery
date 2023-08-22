import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="flowbox-header">
      <div className="header-container">
        <h1 className="flowbox-logo">Flowbox</h1>
        {/* You can add navigation links or any other content here */}
      </div>
    </header>
  );
};

export default Header;

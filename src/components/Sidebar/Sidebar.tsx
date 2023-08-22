import React, { useState, useContext } from "react";
import { PhotoContext } from "../../contexts/PhotoContext";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const context = useContext(PhotoContext);

  if (!context) {
    throw new Error("Sidebar must be used within a PhotoProvider");
  }

  const { viewType, setViewType } = context;
  const [isHovered, setIsHovered] = useState(false);

  type ButtonType = {
    label: string;
    value: "grid" | "carousel" | "list" | "card";
  };

  const buttons: ButtonType[] = [
    { label: "Grid View", value: "grid" },
    { label: "Carousel View", value: "carousel" },
    { label: "List View", value: "list" },
    { label: "Card View", value: "card" },
  ];

  return (
    <div
      className={`sidebar ${isHovered ? "sidebar--active" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {buttons.map((button) => (
        <button
          key={button.value}
          className={`sidebar__button ${
            viewType === button.value ? "sidebar__button--active" : ""
          }`}
          onClick={() => setViewType(button.value)}
          onMouseOver={() => setIsHovered(true)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;

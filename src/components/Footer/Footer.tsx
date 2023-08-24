import { useContext } from "react";
import "./Footer.css";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";

export default function Footer() {
  const { photoSelected } = useContext(PhotoContext) as PhotoContextType;
  return (
    <footer
      style={photoSelected ? { display: "none" } : undefined}
      className=" flowbox-footer"
    >
      <div className="footer-container">
        <p className="footer-content">
          © {new Date().getFullYear()} Flowbox. All rights reserved.
        </p>
        {/* You can add additional footer links, social media icons, or any other content here */}
      </div>
    </footer>
  );
}

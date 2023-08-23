import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import { PhotoProvider } from "./contexts/PhotoProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <PhotoProvider>
      <div className="app-container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </PhotoProvider>
  );
}

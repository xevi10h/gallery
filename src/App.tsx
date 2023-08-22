import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import { PhotoProvider } from "./contexts/PhotoProvider";

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

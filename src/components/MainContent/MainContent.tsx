import React, { useContext, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./MainContent.css";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import PhotoList from "../PhotoList/PhotoList";
import PhotoCard from "../PhotoCard/PhotoCard";
import { createClient, Photo } from "pexels";
import CountrySelector from "../CountrySelector/CountrySelector";

const MainContent: React.FC = () => {
  const { viewType, selectedCountry, setPhotos } = useContext(
    PhotoContext
  ) as PhotoContextType;

  useEffect(() => {
    const fetchPhotos = async () => {
      if (selectedCountry) {
        const pexelsClient = createClient(
          process.env.REACT_APP_PEXELS_API_KEY || ""
        );
        const photos: any = await pexelsClient.photos.search({
          query: selectedCountry || "Spain",
          per_page: 20,
          page: 1,
        });
        console.log(photos);
        if (Array.isArray(photos.photos)) {
          setPhotos(
            photos.photos.map((photo: Photo) => ({
              id: photo.id.toString(),
              name: photo.photographer,
              description: photo.alt,
              image: `${photo.src.original}?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400`,
            }))
          );
        }
      }
    };
    fetchPhotos();
  }, [selectedCountry, setPhotos]);

  return (
    <div className="main-content">
      {/* Displaying content based on state */}
      {viewType === "grid" && <PhotoGrid />}
      {viewType === "carousel" && <PhotoCarousel />}
      {viewType === "list" && <PhotoList />}
      {viewType === "card" && <PhotoCard />}
    </div>
  );
};

export default MainContent;

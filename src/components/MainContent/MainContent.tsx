import React, { useContext, useEffect, useState } from "react";
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
  const { viewType, selectedCountry, setPhotos, addPhotos, page, setPage } =
    useContext(PhotoContext) as PhotoContextType;

  useEffect(() => {
    const footer = document.querySelector(".footer"); // Asume que tu componente Footer tiene una clase 'footer'
    console.log("000000");
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("111");
        const fetchPhotos = async () => {
          const pexelsClient = createClient(
            process.env.REACT_APP_PEXELS_API_KEY || ""
          );
          const newPage = page + 1;
          const photos: any = await pexelsClient.photos.search({
            query: selectedCountry || "Spain",
            page: newPage,
            per_page: 20,
          });
          setPage(newPage);
          console.log(photos);
          if (Array.isArray(photos.photos)) {
            addPhotos(
              photos.photos.map((photo: Photo) => ({
                id: photo.id.toString(),
                name: photo.photographer,
                description: photo.alt,
                image: photo.src.original,
              }))
            );
          }
        };
        fetchPhotos();
      }
    });

    footer && observer.observe(footer);

    // Limpiamos el observer en el efecto de limpieza.
    return () => observer.disconnect();
  }, []); // Se ejecuta una vez cuando el componente se monta.

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
              image: photo.src.original,
            }))
          );
          setPage(1);
        }
      }
    };
    fetchPhotos();
  }, [selectedCountry]);

  return (
    <div className="main-content">
      <CountrySelector />
      <Sidebar />
      {/* Displaying content based on state */}
      {viewType === "grid" && <PhotoGrid />}
      {viewType === "carousel" && <PhotoCarousel />}
      {viewType === "list" && <PhotoList />}
      {viewType === "card" && <PhotoCard />}
    </div>
  );
};

export default MainContent;

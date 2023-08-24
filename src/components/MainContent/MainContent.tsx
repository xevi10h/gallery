import { useContext, useEffect } from "react";
import "./MainContent.css";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import PhotoList from "../PhotoList/PhotoList";
import PhotoCard from "../PhotoCard/PhotoCard";
import UniquePhotoCard from "../UniquePhotoCard/UniquePhotoCard";
import { fetchPhotosByCountry } from "../../services/pexelsService";

export default function MainContent() {
  const {
    viewType,
    selectedCountry,
    setPhotos,
    photoSelected,
    setPhotoSelected,
  } = useContext(PhotoContext) as PhotoContextType;

  useEffect(() => {
    const fetchPhotos = async () => {
      if (selectedCountry) {
        const photos = await fetchPhotosByCountry(selectedCountry);
        setPhotos(photos);
      }
    };
    fetchPhotos();
  }, [selectedCountry, setPhotos]);

  return (
    <div
      className="main-content"
      style={
        photoSelected ||
        viewType === "grid" ||
        viewType === "list" ||
        viewType === "card"
          ? { display: "flex" }
          : undefined
      }
      onClick={() => photoSelected && setPhotoSelected(null)}
    >
      {photoSelected ? (
        <UniquePhotoCard />
      ) : viewType === "grid" ? (
        <PhotoGrid />
      ) : viewType === "carousel" ? (
        <PhotoCarousel />
      ) : viewType === "list" ? (
        <PhotoList />
      ) : viewType === "card" ? (
        <PhotoCard />
      ) : null}
    </div>
  );
}
